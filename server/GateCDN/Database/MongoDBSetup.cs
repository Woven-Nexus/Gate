using dotenv.net.Utilities;
using MongoDB.Driver;
using System.Security.Authentication;

namespace GateCDN.Database;

public static class MongoDBSetup {

	public static void SetupMongoDB(this WebApplicationBuilder builder) {
		builder.Services.AddSingleton<IMongoClient>(provider => {
			string connectionString = EnvReader.GetStringValue("MONGODB_CONNECTIONSTRING");

			MongoClientSettings settings = MongoClientSettings.FromUrl(new MongoUrl(connectionString));
			settings.SslSettings = new SslSettings() { EnabledSslProtocols = SslProtocols.Tls12 };
			var mongoClient = new MongoClient(settings);

			return mongoClient;
		});
	}

}
