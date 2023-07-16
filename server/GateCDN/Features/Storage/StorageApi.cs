using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.StaticFiles;
using Microsoft.Extensions.FileProviders;
using Microsoft.Extensions.Options;

namespace GateCDN.Features.Storage;

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