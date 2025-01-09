// src/main.ts
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  app.useStaticAssets(join(__dirname, '..', 'public'), {
    prefix: '/static/'
  }); // 静态资源目录

  app.setBaseViewsDir(join(__dirname, '..', 'views')); // 模板目录
  app.setViewEngine('ejs'); // 模板引擎

  app.useGlobalPipes(new ValidationPipe()); // 启用全局验证
  await app.listen(3000);
}
bootstrap();
