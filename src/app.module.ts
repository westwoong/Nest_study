import { Module } from '@nestjs/common';
import { PostModule } from './posts/post.module';
import { ORMModule } from './config/ORM.module';

@Module({
  imports: [PostModule, ORMModule],
})
export class AppModule {}
