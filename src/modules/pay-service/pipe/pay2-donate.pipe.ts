import { BadRequestException, Injectable, PipeTransform } from '@nestjs/common';
import { PayService } from '../api/pay-service.service';
import { DonatePayEvent } from '@xdonate/common';

@Injectable()
export class Pay2DonatePipe implements PipeTransform {
	constructor(private readonly paymentService: PayService) {}

	transform(pay: any): DonatePayEvent {
		const donate = this.paymentService.convertPayObjectToDonateEvent(pay);

		if (!donate.sha1_hash) {
			throw new BadRequestException('Платеж невалидный');
		}

		return donate;
	}
}
