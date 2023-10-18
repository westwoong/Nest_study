import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { initializeTransactionalContext } from 'typeorm-transactional';

async function startServer() {
  initializeTransactionalContext();

  console.log('테스트 입니다.');
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}

startServer();
