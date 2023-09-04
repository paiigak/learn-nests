import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // ours api can call over the main
  app.enableCors();
  await app.listen(8000);
}
bootstrap();
