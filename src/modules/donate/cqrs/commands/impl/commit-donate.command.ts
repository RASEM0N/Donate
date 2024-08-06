import { DonatePayEvent } from '@xdonate/common';

export class CommitDonateCommand {
	constructor(public readonly donate: DonatePayEvent) {}
}
