import { Body, Controller, Get, Param, Post, Render } from '@nestjs/common';
import { EventBus } from '@nestjs/cqrs';
import { YandexPayDto } from '../model/yandex-pay.dto';
import { DonatePayEvent } from '../events/donate-pay.event';

@Controller('payservice/yandex')
export class YandexPayController {
  constructor(private readonly eventBus: EventBus) {}

  @Get(':donateId')
  @Render('yandex_pay')
  yandexPay(@Param('donateId') donateId: string) {
    return {
      donateId,
    };
  }

  @Post('secret')
  @Render('confirm')
  secret(@Body() pay: YandexPayDto) {
    // це реактивность
    this.eventBus.publish(new DonatePayEvent(pay.label));
    return { commentId: pay.label };
  }
}
