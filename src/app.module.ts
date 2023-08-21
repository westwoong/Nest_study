import { Module } from '@nestjs/common';
import { ORMModule } from './config/ORM.module';
import { PostModule } from './posts/post.module';

@Module({
  imports: [PostModule, ORMModule],
})
export class AppModule {}
