import { Controller, Get, Render } from '@nestjs/common';

@Controller('message')
export class MessageController {
  @Get('pop')
  @Render('green-screen')
  pop() {
    return {};
  }
}
