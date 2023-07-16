using System.Diagnostics;

namespace GateCDN.Features.Instance;

public static class InstanceApi {

	public static void UseInstanceApi(this WebApplication app) {
		app.MapGet("api/instance/start", StartService);
	}

	public static IResult StartService() {
		try {
			StartCommand(
				"C:\\Programming\\projects\\gate\\GateCDN\\WebApplication1\\bin\\Release\\net7.0\\publish\\WebApplication1.exe",
				"--urls http://localhost:2269;https://localhost:2270"
			);

			return Results.Ok("Success!");
		}
		catch (Exception ex) {
			return Results.Json(
				new { ex.Message },
				statusCode: StatusCodes.Status500InternalServerError
			);
		}
	}

	static void StartCommand(string command, string arguments) {
		ProcessStartInfo processInfo = new() {
			FileName = command,
			Arguments = arguments,
			RedirectStandardOutput = true,
			RedirectStandardError = true,
			UseShellExecute = false,
			CreateNoWindow = false
		};

		Process process = new() {
			StartInfo = processInfo,
		};

		process.OutputDataReceived += (sender, e) => Console.WriteLine(e.Data);
		process.ErrorDataReceived += (sender, e) => Console.WriteLine(e.Data);

		process.Start();

		process.BeginOutputReadLine();
		process.BeginErrorReadLine();
	}

}
