import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DonateModule } from './modules/donate/donate.module';
import { MessagesModule } from './modules/messages/messages.module';
import { PayServiceModule } from './modules/payService/payservice.module';
import { DbModule } from './core/db/db.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),
    DbModule,
    DonateModule,
    MessagesModule,
    PayServiceModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
