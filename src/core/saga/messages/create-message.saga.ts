import { Injectable } from '@nestjs/common';
import { ICommand, ofType, Saga } from '@nestjs/cqrs';
import { map, Observable } from 'rxjs';
import { CreateMessageCommand } from '@/modules/messages/commands/impl/create-message.command';
import {DonateCommitEvent} from "@xdonate/common";

@Injectable()
export class CreateMessageSaga {
	@Saga()
	sendMessage(events$: Observable<any>): Observable<ICommand> {
		return events$.pipe(
			ofType(DonateCommitEvent),
			map(
				(event: DonateCommitEvent) =>
					new CreateMessageCommand(`${event.donater} ${event.amount} ${event.comment}`),
			),
		);
	}
}
