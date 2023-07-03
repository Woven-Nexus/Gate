namespace GateCDN.Database;

public record ConnectorConfig {
	public required string DatabaseName { get; init; }
	public required string RoutesCollection { get; init; }
}
