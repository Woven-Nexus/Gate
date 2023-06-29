namespace GateCDN.Startup;

class CacheResponseMetadata {

	/// <summary>
	/// <para>Maximum age of response that will be accepted to continue using the disk cache.</para>
	/// <para>Should be at or above the output cache duration used for the relevant endpoint.</para>
	/// <para>MaxAge is below the output cache lifespan, client cache will not be used until
	/// output cache is refreshed.</para>
	/// </summary>
	public string MaxAge { get; set; } = "86400";

}

class AddCacheHeadersMiddleware {
	private readonly RequestDelegate _next;

	public AddCacheHeadersMiddleware(RequestDelegate next) {
		_next = next;
	}

	public async Task Invoke(HttpContext httpContext) {
		if (httpContext.GetEndpoint()?.Metadata
			.GetMetadata<CacheResponseMetadata>() is { } mutateResponseMetadata
		) {
			if (httpContext.Response.HasStarted) {
				throw new InvalidOperationException(
					"Can't mutate response after headers have been sent to client.");
			}
			httpContext.Response.Headers.CacheControl = new[] {
				"public",
				"max-age=" + mutateResponseMetadata.MaxAge
			};
		}
		await _next(httpContext);
	}
}

public static class MinimalCacheResponse {

	public static RouteHandlerBuilder CacheResponse(this RouteHandlerBuilder builder) {
		return builder.WithMetadata(new CacheResponseMetadata());
	}

}