import { Module } from '@nestjs/common';
import { CreateDonateHandler } from './commands/handler/create-donate.handler';

@Module({
  providers: [CreateDonateHandler],
})
export class DonateModule {}
