import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { CreateDonateCommand } from '../impl/create-donate.command';

@CommandHandler(CreateDonateCommand)
export class CreateDonateHandler
  implements ICommandHandler<CreateDonateCommand>
{
  async execute(command: CreateDonateCommand): Promise<void> {
    console.log(`CreateDonateCommand`, command);
  }
}
