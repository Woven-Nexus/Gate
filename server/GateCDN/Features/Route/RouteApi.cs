using Microsoft.AspNetCore.Mvc;

namespace GateCDN.Features.Route;

public static class RouteApi {
	public static void Register(WebApplication app) {
		app.MapGet("api/routes", GetAllRoutes);
		app.MapGet("api/routes/{id}", GetRoute);
		app.MapPost("api/routes/new", AddRoute);
		app.MapPatch("api/routes/update", UpdateRoute);
		app.MapDelete("api/routes/delete/{id}", DeleteRoute);
	}

	private static IResult Try(Func<object> action) {
		try {
			return Results.Ok(action());
		}
		catch (Exception ex) {
			return Results.Json(
				new { ex.Message },
				statusCode: StatusCodes.Status500InternalServerError
			);
		}
	}

	public static IResult GetAllRoutes(
		[FromServices] RouteService routeService
	) => Try(() => routeService.GetAllRoutes());

	public static IResult AddRoute(
		[FromServices] RouteService routeService,
		[FromBody] RouteBase route
	) => Try(() => {
		routeService.AddRoute(route);

		return "Route added successfully.";
	});

	public static IResult GetRoute(
		[FromServices] RouteService routeService,
		[FromRoute] string id
	) => Try(() => routeService.GetRoute(id));

	public static IResult UpdateRoute(
		[FromServices] RouteService routeService,
		[FromBody] RouteDTO route
	) => Try(() => {
		routeService.UpdateRoute(route.ToModel());

		return "Route updated successfully.";
	});

	public static IResult DeleteRoute(
		[FromServices] RouteService routeService,
		[FromRoute] string id
	) => Try(() => {
		routeService.DeleteRoute(id);

		return "Route removed successfully.";
	});
}

