import { Module } from '@nestjs/common';
import { CreateMessageHandler } from './commands/handler/create-message.handler';
import { MessageController } from './controller/message.controller';

@Module({
  controllers: [MessageController],
  providers: [CreateMessageHandler],
})
export class MessagesModule {}
