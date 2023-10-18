import { Module } from '@nestjs/common';
import { ORMModule } from './config/ORM.module';
import { PostModule } from './posts/post.module';
import { CommentModule } from './comments/comment.module';
import { CategoryModule } from './posts/category/category.module';

@Module({
  imports: [PostModule, CommentModule, CategoryModule, ORMModule],
})
export class AppModule {}
