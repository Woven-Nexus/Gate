// This tells TypeScript what services we are registering
declare global {
	interface ServiceTypes {
		'api/messages': MessageService;
	}
}


// This is the interface for the message data
interface Message {
	id?: number
	text: string
}


// A messages service that allows us to create new
// and return all existing messages
export class MessageService {

	public messages: Message[] = [];

	public async find() {
		// Just return all our messages
		return this.messages;
	}

	public async create(data: Pick<Message, 'text'>) {
		// The new message is the data text with a unique identifier added
		// using the messages length since it changes whenever we add one
		const message: Message = {
			id:   this.messages.length,
			text: data.text,
		};

		// Add new message to the list
		this.messages.push(message);

		return message;
	}

}
