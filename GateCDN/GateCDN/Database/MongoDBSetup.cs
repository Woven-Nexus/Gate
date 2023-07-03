using MongoDB.Driver;
using System.Security.Authentication;

namespace GateCDN.Database;

public static class MongoDBSetup {

	public static void SetupMongoDB(this WebApplicationBuilder builder) {
		builder.Services.AddSingleton<IMongoClient>(provider => {
			string connectionString = builder.Configuration.GetConnectionString("MongoDB")
				?? throw new Exception("No MongoDB connection string present in appsettings.json");

			MongoClientSettings settings = MongoClientSettings.FromUrl(new MongoUrl(connectionString));
			settings.SslSettings = new SslSettings() { EnabledSslProtocols = SslProtocols.Tls12 };
			var mongoClient = new MongoClient(settings);

			return mongoClient;
		});
	}

}
