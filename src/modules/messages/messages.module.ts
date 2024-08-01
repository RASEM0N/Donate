import { Module } from '@nestjs/common';
import { CreateMessageHandler } from './commands/handler/create-message.handler';

@Module({
  providers: [CreateMessageHandler],
})
export class MessagesModule {}
