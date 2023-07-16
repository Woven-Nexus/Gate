namespace GateCDN.Features.Route;

public static class Register {

	public static void UseRoutesFeature(this WebApplicationBuilder builder) {
		builder.Services.AddTransient<RouteConnector>();
		builder.Services.AddTransient<RouteService>();
	}

	public static void UseRoutesApi(this WebApplication app) {
		RouteApi.Register(app);
	}

}
