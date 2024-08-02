import { Module } from '@nestjs/common';
import { CreateMessageSaga } from './messages/create-message.saga';
import { CommitDonateSaga } from './donate/commit-donate.saga';

@Module({
	imports: [],
	providers: [CreateMessageSaga, CommitDonateSaga],
})
export class DonateSagaModule {}
