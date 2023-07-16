using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace GateCDN.Features.Routes;


public abstract record RouteBase<TId> {
	public abstract TId Id { get; init; }
	public required string Label { get; set; }
	public required string Path { get; set; }

	public virtual RouteModel ToModel() => new() {
		Label = Label,
		Path = Path
	};
}


[BsonIgnoreExtraElements]
public record RouteModel : RouteBase<ObjectId> {

	[BsonId, BsonIgnoreIfDefault, BsonRepresentation(BsonType.ObjectId)]
	public override ObjectId Id { get; init; }

	public RouteDTO ToDTO() => new() {
		Id = Id.ToString(),
		Label = Label,
		Path = Path
	};

}


public record RouteDTO : RouteBase<string> {
	public override required string Id { get; init; }

	public override RouteModel ToModel() => new() {
		Id = ObjectId.Parse(Id),
		Label = Label,
		Path = Path
	};
}