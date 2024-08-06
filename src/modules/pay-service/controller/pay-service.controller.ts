import { Body, Controller, Get, Param, Post, Render } from '@nestjs/common';
import { EventBus } from '@nestjs/cqrs';
import { Pay2DonatePipe } from '@/modules/pay-service/pipe/pay2-donate.pipe';
import { DonatePayEvent } from '@xdonate/common';

@Controller('payservice')
export class PayServiceController {
	constructor(private readonly eventBus: EventBus) {}

	@Get('thanks/:id')
	@Render('thanks')
	thanks(@Param('id') id: number) {
		return { id };
	}

	@Get('yandex/:donateId')
	@Render('yandex_pay')
	yandexPay(@Param('donateId') donateId: string) {
		return {
			donateId,
		};
	}

	@Post('secret')
	@Render('confirm')
	secret(@Body(Pay2DonatePipe) donate: DonatePayEvent) {
		this.eventBus.publish(donate);
		return { commentId: donate.label };
	}
}
