import { Module } from '@nestjs/common';
import { PostsController } from '../controllers/post.controller';
import { PostService } from '../services/post.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Post } from '../model/Post.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Post])],
  controllers: [PostsController],
  providers: [PostService],
})
export class PostModule {}
