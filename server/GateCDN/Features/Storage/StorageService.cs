using GateCDN.Startup;
using Microsoft.Extensions.Options;
using System.IO.Compression;

namespace GateCDN.Features.Storage;

public class StorageService {

	private readonly IWebHostEnvironment _environment;

	public StorageService(
		IWebHostEnvironment environment,
		IOptions<StorageConfig> config
	) {
		_environment = environment;
	}

	public async Task UploadClientFile(
		string application,
		string version,
		string path,
		IFormFile file
	) {
		// Get the path to the folder where you want to store the file
		var uploadPath = Path.Combine(
			_environment.WebRootPath, "vault", "live", "clients", application, version, path);

		// Create the directory if it doesn't exist (including nested directories)
		Directory.CreateDirectory(uploadPath);

		// Get the path to the folder where you want to store the file
		var filePath = Path.Combine(uploadPath, file.FileName);

		// Save the file to the specified path
		using var stream = new FileStream(filePath, FileMode.Create);
		await file.CopyToAsync(stream);
	}

	public async Task UploadClientZip(
		string application,
		string version,
		IFormFile file
	) {
		var uploadPath = Path.Combine(
			_environment.ContentRootPath, "vault", "live", "clients", application, version);

		using var archive = new ZipArchive(file.OpenReadStream(), ZipArchiveMode.Read);
		foreach (var entry in archive.Entries)
			await ProcessZipEntry(entry, uploadPath);
	}

	private static async Task ProcessZipEntry(ZipArchiveEntry entry, string extractionPath) {
		// Skip directories or entries with empty names
		if (entry.FullName.EndsWith("/") || string.IsNullOrEmpty(entry.Name))
			return;

		// Access the entry's name and other properties
		string entryName = entry.FullName;
		//long entrySize = entry.Length;
		//DateTimeOffset entryLastModified = entry.LastWriteTime;

		// Construct the destination path for the entry
		string destinationPath = Path.Combine(extractionPath, entryName);

		// If the entry is a directory, create the directory and continue processing
		if (entryName.EndsWith("/")) {
			Directory.CreateDirectory(destinationPath);
			return;
		}

		// Ensure the parent directory exists
		string parentDirectory = Path.GetDirectoryName(destinationPath)!;
		if (!string.IsNullOrEmpty(parentDirectory))
			Directory.CreateDirectory(parentDirectory);

		// Extract the entry to the destination path
		using var stream = entry.Open();
		using var fileStream = new FileStream(destinationPath, FileMode.Create);

		await stream.CopyToAsync(fileStream);
	}

}
