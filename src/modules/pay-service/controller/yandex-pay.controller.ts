import { Body, Controller, Get, Param, Post, Render } from '@nestjs/common';
import { EventBus } from '@nestjs/cqrs';
import { YandexPayService } from '@/modules/pay-service/api/yandex-pay.service';
import { IYandexPay } from '../model/yandex-pay.interface';

@Controller('payservice/yandex')
export class YandexPayController {
	constructor(
		private readonly eventBus: EventBus,
		private readonly yandexPayService: YandexPayService,
	) {}

	@Get(':donateId')
	@Render('yandex_pay')
	yandexPay(@Param('donateId') donateId: string) {
		return {
			donateId,
		};
	}

	@Post('secret')
	@Render('confirm')
	secret(@Body() pay: IYandexPay) {
		const donate = this.yandexPayService.convertPayObjectToDonateEvent(pay);

		if (donate.sha1_hash) {
			this.eventBus.publish(donate);
		}

		return { commentId: pay.label };
	}
}
