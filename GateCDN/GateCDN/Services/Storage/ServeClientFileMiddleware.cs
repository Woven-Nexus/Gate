using GateCDN.Features.Storage;
using Microsoft.Extensions.Options;


namespace GateCDN.Services.Storage;

public class ServeClientFileMiddleware {

	private readonly Lazy<GateStaticFileMiddleware> staticFileMiddleware;

	public ServeClientFileMiddleware(
		RequestDelegate next,
		IWebHostEnvironment hostingEnv,
		IOptions<GateStaticFileOptions> options,
		ILoggerFactory loggerFactory
	) {
		staticFileMiddleware = new(new GateStaticFileMiddleware(
			next, hostingEnv, options, loggerFactory));
	}

	public Task Invoke(HttpContext context) {
		//context.Response.Headers.CacheControl =
		//	"public, max-age=31536000, s-maxage=31536000, immutable";

		return staticFileMiddleware.Value.Invoke(context);
	}

}

