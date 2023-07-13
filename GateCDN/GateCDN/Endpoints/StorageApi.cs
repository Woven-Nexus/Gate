using GateCDN.Services.Storage;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.StaticFiles;
using Microsoft.Extensions.FileProviders;
using Microsoft.Extensions.Options;
using System.Reflection;

namespace GateCDN.Endpoints;

public static partial class StorageApi {

	public static void UseStorageApi(this WebApplication app) {
		app.MapPost("api/storage/upload-file", UploadClientFile);
		app.MapPost("api/storage/upload-zip", UploadClientZip);
	}

	/// <summary>
	/// This enables the catch all route that serves files from the CDN.
	/// Must be called after all other endpoint registrations.
	/// </summary>
	/// <param name="app"></param>
	public static void UseServeClientApi(this WebApplication app) {

		// Sets the default fallback if nothing matches the requested url.
		app.MapFallback(async (context) => {
			var portalPath = Path.Combine(app.Environment.ContentRootPath, "wwwroot", "index.html");
			await context.Response.SendFileAsync(portalPath);
		});

		// Create the directory if it doesn't exist (including nested directories)
		var path = Path.Combine(app.Environment.ContentRootPath, "vault", "live", "clients");
		Directory.CreateDirectory(path);

		app.UseMiddleware<ReflectedStaticFileMiddleware>(Options.Create(new StaticFileOptions {
			FileProvider = new PhysicalFileProvider(path),
			RequestPath = "/apps",
		}));

		app.UseMiddleware<StaticFileMiddleware>(Options.Create(new StaticFileOptions {
			FileProvider = new PhysicalFileProvider(path),
			RequestPath = "/serve",
		}));

		app.UseMiddleware<StaticFileMiddleware>(Options.Create(new StaticFileOptions {
			FileProvider = new PhysicalFileProvider(Path.Combine(app.Environment.ContentRootPath, "wwwroot")),
			RequestPath = "",
		}));
	}

	public async static Task<IResult> UploadClientFile(
		[FromServices] StorageService storage,
		[FromQuery] string application,
		[FromQuery] string version,
		[FromQuery] string path,
		IFormFile file
	) {
		try {
			await storage.UploadClientFile(application, version, path, file);

			return Results.Ok("File uploaded successfully!");
		}
		catch (Exception ex) {
			return Results.Json(
				new { ex.Message },
				statusCode: StatusCodes.Status500InternalServerError
			);
		}
	}

	public async static Task<IResult> UploadClientZip(
		[FromServices] StorageService storage,
		[FromQuery] string application,
		[FromQuery] string version,
		IFormFile file
	) {
		try {
			await storage.UploadClientZip(application, version, file);

			return Results.Ok("File uploaded successfully!");
		}
		catch (Exception ex) {
			return Results.Json(
				new { ex.Message },
				statusCode: StatusCodes.Status500InternalServerError
			);
		}
	}

}


public class ReflectedStaticFileMiddleware {

	private readonly StaticFileOptions _options;
	private readonly PathString _matchUrl;
	private readonly ILogger _logger;
	private readonly StaticFileMiddleware _middleware;
	private readonly IContentTypeProvider _contentTypeProvider;

	public ReflectedStaticFileMiddleware(
		RequestDelegate next,
		IWebHostEnvironment hostingEnv,
		IOptions<StaticFileOptions> options,
		ILoggerFactory loggerFactory
	) {
		_options = options.Value;
		_matchUrl = _options.RequestPath;
		_contentTypeProvider = _options.ContentTypeProvider ?? new FileExtensionContentTypeProvider();
		_middleware = new StaticFileMiddleware(next, hostingEnv, options, loggerFactory);
		_logger = loggerFactory.CreateLogger<StaticFileMiddleware>();
	}

	public bool ValidatePath(
		HttpContext context,
		PathString matchUrl,
		out PathString subPath
	) {
		Type staticType = typeof(StaticFileMiddleware);
		MethodInfo method = staticType.GetMethod("ValidatePath", BindingFlags.NonPublic | BindingFlags.Static)!;

		subPath = "";
		object[] parameters = new object[] { context, matchUrl, subPath };

		bool result = (bool)method.Invoke(null, parameters)!;
		subPath = (PathString)parameters.ElementAt(2);

		return result;
	}

	public bool LookupContentType(
		IContentTypeProvider contentTypeProvider,
		StaticFileOptions options,
		PathString subPath,
		out string? contentType
	) {
		Type staticType = typeof(StaticFileMiddleware);
		MethodInfo method = staticType.GetMethod("LookupContentType", BindingFlags.NonPublic | BindingFlags.Static)!;

		contentType = null;
		var parameters = new object?[] { contentTypeProvider, options, subPath, contentType };

		bool result = (bool)method.Invoke(null, parameters)!;
		contentType = (string?)parameters.ElementAt(3);

		return result;
	}

	public Task TryServeStaticFile(
		HttpContext context,
		string? contentType,
		PathString subPath
	) {
		Type staticType = typeof(StaticFileMiddleware);
		MethodInfo method = staticType.GetMethod("TryServeStaticFile", BindingFlags.NonPublic | BindingFlags.Instance)!;

		var parameters = new object?[] { context, contentType, subPath };

		Task result = (Task)method.Invoke(_middleware, parameters)!;

		return result;
	}

	public void PathMismatch(string path) {
		_logger.LogDebug("The request path {Path} does not match the path filter", path);
	}

	public void FileTypeNotSupported(string path) {
		_logger.LogDebug("The request path {Path} does not match a supported file type", path);
	}

	/// <summary>
	/// Processes a request to determine if it matches a known file, and if so, serves it.
	/// This is a reflected implementation of AspNetCore StaticFileMiddleware.
	/// </summary>
	/// <param name="context"></param>
	/// <returns></returns>
	public Task Invoke(HttpContext context) {
		if (!context.Request.Path.StartsWithSegments("/apps"))
			return _middleware.Invoke(context);

		// Add something that checks searchparams for a fallback=false.
		// If fallback is false, do not perform the path mutation stuff.

		if (!context.Request.Path.ToString().EndsWith(".js")) {
			var mutatedPath = context.Request.Path.ToString().Trim('/').Split('/');
			var newPath = '/' + string.Join('/',mutatedPath.Take(3).ToArray()) + "/index.html";
			context.Request.Path = newPath;

			//context.Response.Headers.CacheControl =
			//	"public, max-age=31536000, s-maxage=31536000, immutable";
		}

		if (!ValidatePath(context, _matchUrl, out PathString subPath)) {
			PathMismatch(subPath);
		}
		else if (!LookupContentType(_contentTypeProvider, _options, subPath, out var contentType)) {
			FileTypeNotSupported(subPath);
		}
		else {
			// If we get here, we can try to serve the file
			return TryServeStaticFile(context, contentType, subPath);
		}

		return _middleware.Invoke(context);
	}
}