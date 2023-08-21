import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Post } from './Post.entity';
import { PostController } from './post.controller';
import { PostService } from './post.service';
import { Category } from './category/Category.entity';
import { PostToCategory } from './category/PostToCategory.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Post, Category, PostToCategory])],
  controllers: [PostController],
  providers: [PostService],
})
export class PostModule {}
