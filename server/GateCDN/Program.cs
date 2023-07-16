using dotenv.net;
using GateCDN.Database;
using GateCDN.Features.Instance;
using GateCDN.Features.Route;
using GateCDN.Features.Storage;
using GateCDN.Startup;
using Microsoft.AspNetCore.Http.Json;
using Serilog;
using System.Text.Json;
using System.Text.Json.Serialization;

var builder = WebApplication.CreateBuilder(args);

// Load environment variables from .env files.
DotEnv.Load(options: new DotEnvOptions(envFilePaths: new[] {
	"./.env",
	"./.env.development",
	"./.env.production"
}));

// Add Serilog
builder.Host.UseSerilog((_, config) => {
	config.WriteTo.Console().ReadFrom.Configuration(builder.Configuration);
});

// Adds Cors profiles
builder.AddCors();

// Control caching
builder.Services.AddOutputCache();

// Configures json serialization
builder.Services.Configure<JsonOptions>(options => {
	options.SerializerOptions.Converters.Add(new JsonStringEnumConverter());
	options.SerializerOptions.PropertyNamingPolicy = JsonNamingPolicy.CamelCase;
});

// Add Swagger
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

// Setup Database
builder.SetupMongoDB();

// Add storage config
builder.Services.Configure<StorageConfig>(
	builder.Configuration.GetSection("StorageConfig"));

builder.Services.Configure<ConnectorConfig>(
	builder.Configuration.GetSection("ConnectorConfig"));

// Add services
builder.Services.AddTransient<StorageService>();

builder.UseRoutesFeature();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment()) {
	app.UseDarkModeSwagger();
	app.UseCors("dev");
}

app.UseHttpsRedirection();

app.UseOutputCache();
app.UseMiddleware<AddCacheHeadersMiddleware>();

// Register custom endpoints
app.UseInstanceApi();
app.UseRoutesApi();
app.UseStorageApi();
app.UseServeClientApi();

app.Run();
