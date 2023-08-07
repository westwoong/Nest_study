import { Module } from '@nestjs/common';
import { PostModule } from './modules/post.module';
import { CommentModule } from './modules/comment.module';
import { ORMModule } from './modules/ORM.module';

@Module({
  imports: [PostModule, CommentModule, ORMModule],
})
export class AppModule {}
