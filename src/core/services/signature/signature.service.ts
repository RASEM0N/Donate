import { Injectable } from '@nestjs/common';
import { createHash } from 'crypto';

@Injectable()
export class SignatureService {
	public sha1HexSign(fields, sep = '&'): string {
		const sha1Hash = createHash('sha1');
		sha1Hash.update(fields.join(sep), 'utf8');
		return sha1Hash.digest('hex');
	}
}
