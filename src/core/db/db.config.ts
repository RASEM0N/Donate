import { ConfigService } from '@nestjs/config';
import { SequelizeOptions } from 'sequelize-typescript';
import { Dialect } from 'sequelize';

export const config = (configService: ConfigService): SequelizeOptions => {
	return {
		database: configService.get<string>('DB_NAME'),
		username: configService.get<string>('DB_USER'),
		password: configService.get<string>('DB_PASS'),

		host: configService.get<string>('DB_HOST'),
		port: +configService.get<number>('DB_PORT'),

		dialect: configService.get<Dialect>('DB_DIALECT'),
		storage: configService.get<string>('DB_STORAGE'),
	};
};
