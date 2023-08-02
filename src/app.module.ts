import { Module } from '@nestjs/common';
import { PostModule } from './modules/post.module';
import { CommentModule } from './modules/comment.module';

@Module({
  imports: [PostModule, CommentModule],
})
export class AppModule {}
