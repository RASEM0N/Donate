import { Module } from '@nestjs/common';
import { providers } from './db.provider';

@Module({
  providers: [...providers],
  exports: [...providers],
})
export class DbModule {}
