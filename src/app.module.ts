import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DbModule } from '@/core/db/db.module';
import { DonateModule } from '@/modules/donate/donate.module';
import { MessagesModule } from '@/modules/messages/messages.module';
import { PayServiceModule } from '@/modules/pay-service/pay-service.module';
import { XDonateServicesModule } from '@/core/services/x-donate-services.module';

@Module({
	imports: [
		ConfigModule.forRoot({
			isGlobal: true,
			envFilePath: '.env',
		}),
		DbModule,
		XDonateServicesModule,
		DonateModule,
		MessagesModule,
		PayServiceModule,
	],
	controllers: [AppController],
	providers: [AppService],
})
export class AppModule {}
