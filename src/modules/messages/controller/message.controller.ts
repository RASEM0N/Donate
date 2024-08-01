import { Controller, Get, Render } from '@nestjs/common';
import { MessagesService } from '../api/messages.service';

@Controller('message')
export class MessageController {
  constructor(private readonly messageService: MessagesService) {}

  @Get('pop')
  @Render('green-screen')
  async pop() {
    const message = await this.messageService.pop();
    return {
      title: 'Message',
      message: message.message,
    };
  }
}
