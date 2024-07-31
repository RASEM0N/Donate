import { Provider } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { PROVIDE_SEQUELIZE } from '../constants';
import { config } from './db.config';
import { Sequelize } from 'sequelize-typescript';

export const providers: Provider[] = [
  {
    provide: PROVIDE_SEQUELIZE,
    inject: [ConfigModule],
    useFactory: async (configService: ConfigService): Promise<Sequelize> => {
      const sequelize = new Sequelize(config(configService));
      sequelize.addModels([]);

      await sequelize
        .sync()
        .then(() => console.log(`connected to DB`))
        .catch((e) => console.error(e));

      return sequelize;
    },
  },
];
