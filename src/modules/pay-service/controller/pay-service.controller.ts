import { Controller, Get, Param, Render } from '@nestjs/common';
import { EventBus } from '@nestjs/cqrs';

@Controller('payservice')
export class PayServiceController {
	constructor(private readonly eventBus: EventBus) {}

	@Get('thanks/:id')
	@Render('thanks')
	thanks(@Param('id') id: number) {
		return { id };
	}
}
