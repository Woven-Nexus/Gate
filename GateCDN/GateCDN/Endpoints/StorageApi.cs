using GateCDN.Services.Storage;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.FileProviders;
using Microsoft.Extensions.Options;

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
		var path = Path.Combine(app.Environment.ContentRootPath, "vault", "live", "clients");

		// Create the directory if it doesn't exist (including nested directories)
		Directory.CreateDirectory(path);

		var options = new StaticFileOptions {
			FileProvider = new PhysicalFileProvider(path),
			RequestPath = "/serve",
		};

		app.UseMiddleware<ServeClientFileMiddleware>(Options.Create(options));
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
