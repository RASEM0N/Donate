import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { PayServiceController } from './controller/pay-service.controller';
import { YandexPayService } from './api/yandex-pay.service';
import { PayService } from './api/pay-service.service';

@Module({
	imports: [CqrsModule],
	controllers: [PayServiceController],
	providers: [
		{
			provide: PayService,
			useValue: YandexPayService,
		},
	],
})
export class PayServiceModule {}
