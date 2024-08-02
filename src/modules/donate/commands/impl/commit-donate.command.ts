import { DonatePayEvent } from '@/core/events/donate-pay.event';

export class CommitDonateCommand {
	constructor(public readonly donate: DonatePayEvent) {}
}
