import { Module } from '@nestjs/common';
import { PostModule } from './post.module';
import { CommentModule } from './comment.module';

@Module({
  imports: [PostModule, CommentModule],
})
export class IndexModule {}
