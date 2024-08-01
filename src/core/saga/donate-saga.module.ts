import { Module } from '@nestjs/common';
import { CreateMessageSaga } from './messages/create-message.saga';

@Module({
  imports: [],
  providers: [CreateMessageSaga],
})
export class DonateSagaModule {}
