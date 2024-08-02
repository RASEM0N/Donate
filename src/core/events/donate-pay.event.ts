export enum PaymentState {
	in_progress = 'in_progress',
	completed = 'completed',
	unknown = 'unknown',
}

export enum PaymentProtection {
	protected = 'protected',
	not_protected = 'not_protected',
	unknown = 'unknown',
}

export class DonatePayEvent {
	public sha1_hash: string;

	constructor(
		public readonly label: string = '',
		public readonly operation_id: string = '',
		public readonly sender: string = '',
		public readonly currency: number = 0,
		public readonly amount: number = 0,
		public readonly datetime: Date = new Date(0),
		public readonly state: PaymentState = PaymentState.unknown,
		public readonly protection: PaymentProtection = PaymentProtection.unknown,
	) {}
}

export class DonateCommitEvent {
	constructor(
		public readonly donater: string,
		public readonly email: string,
		public readonly amount: number,
		public readonly comment: string,
		public readonly done: boolean,
		public readonly action_state: string,
	) {}
}
