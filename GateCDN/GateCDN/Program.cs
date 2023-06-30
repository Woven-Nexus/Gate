using GateCDN.Endpoints;
using GateCDN.Services.Storage;
using GateCDN.Startup;
using Microsoft.AspNetCore.Http.Json;
using Serilog;
using System.Text.Json;
using System.Text.Json.Serialization;

var builder = WebApplication.CreateBuilder(args);

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

// Add storage config
builder.Services.Configure<StorageConfig>(
	builder.Configuration.GetSection("StorageConfig"));

// Add services
builder.Services.AddTransient<StorageService>();

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
app.UseStorageApi();
app.UseServeApi();

app.Run();
