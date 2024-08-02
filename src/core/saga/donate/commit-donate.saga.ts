import { Injectable } from '@nestjs/common';
import { ICommand, ofType, Saga } from '@nestjs/cqrs';
import { map, Observable } from 'rxjs';
import { DonatePayEvent } from '@/core/events/donate-pay.event';
import { CommitDonateCommand } from '@/modules/donate/commands/impl/commit-donate.command';

@Injectable()
export class CommitDonateSaga {
	@Saga()
	commitDonate(event$: Observable<any>): Observable<ICommand> {
		return event$.pipe(
			ofType(DonatePayEvent),
			map((event: DonatePayEvent) => new CommitDonateCommand(event)),
		);
	}
}
