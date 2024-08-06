import { Injectable } from '@nestjs/common';
import { ICommand, ofType, Saga } from '@nestjs/cqrs';
import { map, Observable } from 'rxjs';
import { CommitDonateCommand } from '@/modules/donate/commands/impl/commit-donate.command';
import { DonatePayEvent } from '@xdonate/common';

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
