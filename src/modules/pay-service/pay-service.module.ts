import { Module } from '@nestjs/common';
import { CqrsModule, EventBus } from '@nestjs/cqrs';
import { YandexPayController } from './controller/yandex-pay.controller';
import { PayServiceController } from './controller/pay-service.controller';

@Module({
	imports: [CqrsModule],
	providers: [],
	controllers: [PayServiceController, YandexPayController],
})
export class PayServiceModule {
	constructor(private readonly eventBus: EventBus) {}
}
