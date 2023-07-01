using Microsoft.AspNetCore.StaticFiles;
using Microsoft.Extensions.Options;

namespace GateCDN.Services.Storage;

public class ServeClientFileMiddleware {

	private readonly Lazy<StaticFileMiddleware> staticFileMiddleware;

	public ServeClientFileMiddleware(
		RequestDelegate next,
		IWebHostEnvironment hostingEnv,
		IOptions<StaticFileOptions> options,
		ILoggerFactory loggerFactory
	) {
		staticFileMiddleware = new(new StaticFileMiddleware(
			next, hostingEnv, options, loggerFactory));
	}

	public Task Invoke(HttpContext context) {
		//context.Response.Headers.CacheControl =
		//	"public, max-age=31536000, s-maxage=31536000, immutable";

		return staticFileMiddleware.Value.Invoke(context);
	}

}
