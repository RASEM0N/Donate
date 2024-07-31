import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { join } from 'path';
import type { NestExpressApplication } from '@nestjs/platform-express';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  setupStatic(app);
  await app.listen(process.env.ENV || 3000);
}

function setupStatic(app: NestExpressApplication) {
  app.useStaticAssets(join(__dirname, '..', 'public'));
  app.setBaseViewsDir(join(__dirname, '..', 'src/views'));
  app.setViewEngine('pug');
}

bootstrap();
