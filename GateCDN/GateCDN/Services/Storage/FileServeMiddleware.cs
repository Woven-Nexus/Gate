using Microsoft.AspNetCore.StaticFiles;
using Microsoft.Extensions.Options;

namespace GateCDN.Services.Storage;

public class FileServeMiddleware {

	private readonly StaticFileMiddleware staticFileMiddleware;

	public FileServeMiddleware(
		RequestDelegate next,
		IWebHostEnvironment hostingEnv,
		IOptions<StaticFileOptions> options,
		ILoggerFactory loggerFactory
	) {
		staticFileMiddleware = new StaticFileMiddleware(
			next, hostingEnv, options, loggerFactory);
	}

	public Task Invoke(HttpContext context) {
		context.Response.Headers.CacheControl =
			"public, max-age=31536000, s-maxage=31536000, immutable";

		return staticFileMiddleware.Invoke(context);
	}

}
