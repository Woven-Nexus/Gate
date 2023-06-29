namespace GateCDN.Startup;

public static class DarkModeSwagger {

	public static void UseDarkModeSwagger(this WebApplication app) {
		app.UseSwagger();
		app.UseSwaggerUI(cfg => {
			cfg.InjectStylesheet("/swagger-ui/SwaggerDark.css");
		});

		app.MapGet("/swagger-ui/SwaggerDark.css", async (CancellationToken cToken) => {
			var css = await File.ReadAllBytesAsync("wwwroot/swagger/SwaggerDark.css", cToken);
			return Results.File(css, "text/css");
		}).ExcludeFromDescription();
	}
}
