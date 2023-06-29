using GateCDN.Startup;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Options;

namespace GateCDN.Endpoints;

public static partial class StorageApi {

	public static void UseStorageApi(this WebApplication app) {
		app.MapPost("api/storage/upload/{path}", Upload);
		app.MapGet("{path}", Download);
	}

	public async static Task<IResult> Upload(
		[FromServices] IWebHostEnvironment environment,
		[FromServices] IServiceProvider provider,
		[FromServices] IOptions<StorageConfig> config,
		[FromRoute] string path,
		IFormFile file
	) {
		// Get the path to the folder where you want to store the file
		var uploadPath = Path.Combine(environment.WebRootPath, "uploads");

		// Create the directory if it doesn't exist (including nested directories)
		Directory.CreateDirectory(uploadPath);

		// Get the path to the folder where you want to store the file
		var filePath = Path.Combine(uploadPath, file.FileName);

		// Save the file to the specified path
		using (var stream = new FileStream(filePath, FileMode.Create))
			await file.CopyToAsync(stream);

		return Results.Ok("File uploaded successfully!");

		//var (storage, err) = GetStorage(container, provider);
		//if (storage is null)
		//	return err!;

		//var response = await storage.UploadAsync(file);

		//if (response.Error == true) {
		//	return Results.Json(
		//		new { response.Status },
		//		statusCode: StatusCodes.Status500InternalServerError
		//	);
		//}

		//return Results.Ok(response);
	}

	public static IResult Download(
		[FromServices] IServiceProvider provider,
		[FromRoute] string path
	) {

		return Results.Ok();
		//var (storage, err) = GetStorage(container, provider);
		//if (storage is null)
		//	return err!;

		//BlobDto? file = await storage.DownloadAsync(filename);

		//if (file is null) {
		//	return Results.Json(
		//		new { message = $"File {filename} could not be downloaded." },
		//		statusCode: StatusCodes.Status500InternalServerError
		//	);
		//}

		//return Results.File(
		//	file.Content!,
		//	contentType: file.ContentType!,
		//	fileDownloadName: file.Name
		//);
	}
}
