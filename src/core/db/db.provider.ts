import { Provider } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { PROVIDERS } from '../constants';
import { config } from './db.config';
import { Sequelize } from 'sequelize-typescript';
import { Message } from '@/modules/messages/model/message.entity';

export const providers: Provider[] = [
  {
    provide: PROVIDERS.db,
    inject: [ConfigModule],
    useFactory: async (configService: ConfigService): Promise<Sequelize> => {
      const sequelize = new Sequelize(config(configService));
      sequelize.addModels([Message]);

      await sequelize
        .sync()
        .then(() => console.log(`connected to DB`))
        .catch((e) => console.error(e));

      return sequelize;
    },
  },
];
