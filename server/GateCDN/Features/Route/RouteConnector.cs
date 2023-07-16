using GateCDN.Database;
using Microsoft.Extensions.Options;
using MongoDB.Driver;

namespace GateCDN.Features.Route;

public class RouteConnector {

	protected readonly ConnectorConfig config;
	protected readonly IMongoClient mongoClient;

	public RouteConnector(
		IOptions<ConnectorConfig> config,
		IMongoClient mongoClient
	) {
		this.config = config.Value;
		this.mongoClient = mongoClient;
	}

	public IMongoCollection<RouteModel> GetRouteCollection() {

		var db = mongoClient.GetDatabase(config.DatabaseName);
		var collection = db.GetCollection<RouteModel>(config.RoutesCollection);

		return collection;
	}

}
