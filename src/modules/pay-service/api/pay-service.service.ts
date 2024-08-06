import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { SignatureService } from '@/core/services/signature/signature.service';
import { DonatePayEvent } from '@xdonate/common';

@Injectable()
export class PayService {
	constructor(
		protected readonly configService: ConfigService,
		protected readonly signatureService: SignatureService,
	) {}

	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	convertPayObjectToDonateEvent(pay: any): DonatePayEvent {
		return new DonatePayEvent();
	}
}
