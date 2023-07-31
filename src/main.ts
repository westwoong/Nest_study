import { NestFactory } from '@nestjs/core';
import { IndexModule } from './modules/index.module';

async function startServer() {
  const app = await NestFactory.create(IndexModule);
  await app.listen(3000);
}

startServer();
