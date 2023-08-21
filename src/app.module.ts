import { Module } from '@nestjs/common';
import { ORMModule } from './config/ORM.module';
import { PostModule } from './posts/post.module';
import { CommentModule } from './comments/comment.module';

@Module({
  imports: [PostModule, CommentModule, ORMModule],
})
export class AppModule {}
