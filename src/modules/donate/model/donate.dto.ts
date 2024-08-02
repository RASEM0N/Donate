export class DonateDto {
	readonly donater: string;
	readonly email: string;
	readonly amount: number;
	readonly comment: string;
	readonly done: boolean;
	readonly action_state: string;
}
