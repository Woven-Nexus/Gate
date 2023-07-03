using MongoDB.Bson;
using MongoDB.Driver;

namespace GateCDN.Features.Routes;

public class RouteService {

	private readonly RouteConnector connector;
	private readonly FilterDefinitionBuilder<RouteModel> filterBuilder = Builders<RouteModel>.Filter;

	public RouteService(
		RouteConnector connector
	) {
		this.connector = connector;
	}

	public List<RouteDTO> GetAllRoutes() {
		var coll = connector.GetRouteCollection();
		var filter = filterBuilder.Exists(f => f.Id);

		var routes = coll.Find(filter).ToList()
			.Select(s => s.ToDTO()).ToList();

		return routes;
	}

	public RouteDTO GetRoute(string id) {
		var coll = connector.GetRouteCollection();
		var filter = filterBuilder.Eq(f => f.Id, ObjectId.Parse(id));

		var route = coll.Find(filter).First().ToDTO();

		return route;
	}

	public void AddRoute(RouteBase route) {
		var coll = connector.GetRouteCollection();

		coll.InsertOne(route.ToModel());
	}

	public void UpdateRoute(RouteModel route) {
		var coll = connector.GetRouteCollection();
		var filter = filterBuilder.Eq(f => f.Id, route.Id);

		coll.ReplaceOne(filter, route);
	}

	public void DeleteRoute(string id) {
		var coll = connector.GetRouteCollection();
		var filter = filterBuilder.Eq(f => f.Id, ObjectId.Parse(id));

		coll.DeleteOne(filter);
	}

}
