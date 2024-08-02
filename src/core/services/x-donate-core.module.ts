import { Module } from '@nestjs/common';
import { SignatureService } from './signature/signature.service';

@Module({
	providers: [SignatureService],
	imports: [SignatureService],
})
export class XDonateCoreModule {}
