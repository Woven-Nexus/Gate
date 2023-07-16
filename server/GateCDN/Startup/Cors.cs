using GateCDN.Startup;

namespace GateCDN.Startup;

public static class Cors {
	public static void AddCors(this WebApplicationBuilder builder) {
		builder.Services.AddCors(p => {
			p.AddPolicy("dev", builder => {
				builder.WithOrigins("*").AllowAnyMethod().AllowAnyHeader();
			});
		});

		builder.Services.AddCors(p => {
			p.AddPolicy("prod", builder => {
				builder.WithOrigins("*").AllowAnyMethod().AllowAnyHeader();
			});
		});
	}
}
