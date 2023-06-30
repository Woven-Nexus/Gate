using GateCDN.Services.Storage;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.FileProviders;
using Microsoft.Extensions.Options;

namespace GateCDN.Endpoints;

public static partial class StorageApi {

	public static void UseStorageApi(this WebApplication app) {
		app.MapPost("api/storage/upload-file", UploadFile);
		app.MapPost("api/storage/upload-zip", UploadZip);
	}

	/// <summary>
	/// This enables the catch all route that serves files from the CDN.
	/// Must be called after all other endpoint registrations.
	/// </summary>
	/// <param name="app"></param>
	public static void UseServeApi(this WebApplication app) {
		var path = Path.Combine(app.Environment.WebRootPath, "uploads");

		var options = new StaticFileOptions {
			FileProvider = new PhysicalFileProvider(path),
			RequestPath = "",
		};

		app.UseMiddleware<FileServeMiddleware>(Options.Create(options));
	}

	public async static Task<IResult> UploadFile(
		[FromServices] StorageService storage,
		[FromQuery] string application,
		[FromQuery] string version,
		[FromQuery] string path,
		IFormFile file
	) {
		try {
			await storage.UploadFile(application, version, path, file);

			return Results.Ok("File uploaded successfully!");
		}
		catch (Exception ex) {
			return Results.Json(
				new { ex.Message },
				statusCode: StatusCodes.Status500InternalServerError
			);
		}
	}

	public async static Task<IResult> UploadZip(
		[FromServices] StorageService storage,
		[FromQuery] string application,
		[FromQuery] string version,
		IFormFile file
	) {
		try {
			await storage.UploadZip(application, version, file);

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
