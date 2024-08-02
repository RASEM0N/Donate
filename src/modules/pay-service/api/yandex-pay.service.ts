import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { IYandexPay } from '../model/yandex-pay.interface';
import { SignatureService } from '@/core/services/signature/signature.service';
import { DonatePayEvent, PaymentState, PaymentProtection } from '@/core/events/donate-pay.event';

@Injectable()
export class YandexPayService {
	constructor(
		private readonly configService: ConfigService,
		private readonly signatureService: SignatureService,
	) {}

	convertPayObjectToDonateEvent(pay: IYandexPay): DonatePayEvent {
		if (this.isValidPayment(pay)) {
			const payment = new DonatePayEvent(
				pay.label,
				pay.operation_id,
				pay.sender,
				parseInt(pay.currency),
				parseFloat(pay.amount),
				new Date(pay.datetime),
				pay.unaccepted === 'true' ? PaymentState.in_progress : PaymentState.completed,
				pay.codepro === 'true' ? PaymentProtection.protected : PaymentProtection.not_protected,
			);
			payment.sha1_hash = this.signatureService.sha1HexSign([
				payment.label,
				payment.amount,
				payment.datetime.getTime(),
				this.configService.get<string>('NEST_DONATE_SECRET'),
			]);
			return payment;
		}
		return new DonatePayEvent();
	}

	private isValidPayment(pay: IYandexPay): boolean {
		const hexPaySecret = this.signatureService.sha1HexSign([
			pay.notification_type,
			pay.operation_id,
			pay.amount,
			pay.currency,
			pay.datetime,
			pay.sender,
			pay.codepro,

			// у Яндекс есть секрет и у нас
			// в конечном итоге sha1_hash должен совпасть
			this.configService.get<string>('YANDEX_SECRET'),
			pay.label,
		]);
		return hexPaySecret === pay.sha1_hash;
	}
}
