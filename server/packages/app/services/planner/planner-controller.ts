declare global {
	interface ServiceTypes {
		'api/planner': PlannerController;
	}
}


export class PlannerController {

	public async find() {
		// Just return all our messages
		return 'Hei this worked';
	}

}
