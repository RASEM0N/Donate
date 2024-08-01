import { Inject, Injectable } from '@nestjs/common';
import { PROVIDERS } from '@/core/constants';
import { Message } from '../model/message.entity';
import { MessageDto } from '../model/message.dto';

@Injectable()
export class MessagesService {
	constructor(
		@Inject(PROVIDERS.repositories.message)
		private readonly messageRepository: typeof Message,
	) {}

	pop(): Promise<Message> {
		return this.messageRepository.findOne({
			limit: 1,
			where: {},
			order: [['createdAt', 'DESC']],
		});
	}

	create(dto: MessageDto): Promise<Message> {
		return this.messageRepository.create({ message: dto.message });
	}
}
