import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { YandexPayController } from './controller/yandex-pay.controller';
import { PayServiceController } from './controller/pay-service.controller';
import { YandexPayService } from './api/yandex-pay.service';

@Module({
	imports: [CqrsModule],
	providers: [YandexPayService],
	controllers: [PayServiceController, YandexPayController],
})
export class PayServiceModule {}
