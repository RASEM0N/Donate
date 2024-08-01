import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { CreateMessageCommand } from '../impl/create-message.command';
import { MessagesService } from '../../api/messages.service';

@CommandHandler(CreateMessageCommand)
export class CreateMessageHandler implements ICommandHandler<CreateMessageCommand> {
	constructor(private readonly messageService: MessagesService) {}

	async execute(command: CreateMessageCommand): Promise<void> {
		await this.messageService.create(command);
	}
}
