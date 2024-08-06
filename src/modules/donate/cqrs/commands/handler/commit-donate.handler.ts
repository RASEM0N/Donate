import { CommandHandler, EventBus, ICommandHandler } from '@nestjs/cqrs';
import { CommitDonateCommand } from '../impl/commit-donate.command';
import { DonateService } from '../../../api/donate.service';
import { DonateCommitEvent } from '@xdonate/common';

@CommandHandler(CommitDonateCommand)
export class CommitDonateHandler implements ICommandHandler<CommitDonateCommand> {
	constructor(
		private readonly eventBus: EventBus,
		private readonly donateService: DonateService,
	) {}

	async execute(command: CommitDonateCommand): Promise<void> {
		const donate = await this.donateService.findById(+command.donate.label);

		if (!donate) {
			return;
		}

		await this.donateService.commit(donate, command.donate.amount);

		this.eventBus.publish(
			new DonateCommitEvent(
				donate.donater,
				donate.email,
				donate.amount,
				donate.comment,
				donate.done,
				'done',
			),
		);
	}
}
