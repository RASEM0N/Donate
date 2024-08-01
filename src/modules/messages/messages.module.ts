import { Module } from '@nestjs/common';
import { PROVIDERS } from '@/core/constants';
import { CreateMessageHandler } from './commands/handler/create-message.handler';
import { MessageController } from './controller/message.controller';
import { Message } from './model/message.entity';
import { MessagesService } from './api/messages.service';

@Module({
	controllers: [MessageController],
	providers: [
		CreateMessageHandler,
		MessagesService,
		{
			provide: PROVIDERS.repositories.message,
			useValue: Message,
		},
	],
})
export class MessagesModule {}
