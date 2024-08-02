import { Module } from '@nestjs/common';
import { CreateMessageSaga } from './messages/create-message.saga';
import { CommitMessageSaga } from './donate/commit-message.saga';

@Module({
	imports: [],
	providers: [CreateMessageSaga, CommitMessageSaga],
})
export class DonateSagaModule {}
