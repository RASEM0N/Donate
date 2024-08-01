import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DbModule } from '@/core/db/db.module';
import { DonateSagaModule } from '@/core/saga/donate-saga.module';
import { DonateModule } from '@/modules/donate/donate.module';
import { MessagesModule } from '@/modules/messages/messages.module';
import { PayServiceModule } from '@/modules/pay-service/pay-service.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),
    DbModule,
    DonateSagaModule,
    DonateModule,
    MessagesModule,
    PayServiceModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
