import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { CreateMessageCommand } from '../impl/create-message.command';

@CommandHandler(CreateMessageCommand)
export class CreateMessageHandler
  implements ICommandHandler<CreateMessageHandler>
{
  async execute(command: CreateMessageHandler): Promise<void> {
    console.log(`CreateMessageHandler`, command);
  }
}
