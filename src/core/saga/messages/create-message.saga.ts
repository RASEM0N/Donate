import { Injectable } from '@nestjs/common';
import { ICommand, ofType, Saga } from '@nestjs/cqrs';
import { mergeMap, Observable } from 'rxjs';
import { DonatePayEvent } from '@/modules/pay-service/events/donate-pay.event';
import { CreateDonateCommand } from '@/modules/donate/commands/impl/create-donate.command';
import { CreateMessageCommand } from '@/modules/messages/commands/impl/create-message.command';

@Injectable()
export class CreateMessageSaga {
  @Saga()
  sendMessage(events$: Observable<any>): Observable<ICommand> {
    return events$.pipe(
      // берем только события DonatePayEvent
      ofType(DonatePayEvent),

      // и только после этого отправляем команды
      mergeMap((event: DonatePayEvent) => [
        new CreateDonateCommand(`[SAGA] ${event.label}`),
        new CreateMessageCommand(`[SAGA] ${event.label}`),
      ]),
    );
  }
}
