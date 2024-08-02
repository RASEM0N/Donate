import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { CommitDonateHandler } from './commands/handler/commit-donate.handler';
import { DonateService } from './api/donate.service';
import { PROVIDERS } from '@/core/constants';
import { Donate } from './model/donate.entity';
import { DonateController } from './controller/donate.controller';

@Module({
	imports: [CqrsModule],
	controllers: [DonateController],
	providers: [
		DonateService,
		CommitDonateHandler,
		{
			provide: PROVIDERS.repositories.donate,
			useValue: Donate,
		},
	],
})
export class DonateModule {}
