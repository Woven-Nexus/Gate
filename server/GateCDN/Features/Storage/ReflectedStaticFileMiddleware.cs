using Microsoft.AspNetCore.StaticFiles;
using Microsoft.Extensions.Options;
using System.Reflection;

namespace GateCDN.Features.Storage;

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