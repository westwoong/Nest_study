import { Module } from '@nestjs/common';
import { PostModule } from './modules/post.module';
import { ORMModule } from './modules/ORM.module';

@Module({
  imports: [PostModule, ORMModule],
})
export class AppModule {}
