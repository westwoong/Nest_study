import { Module } from '@nestjs/common';
import { PostsController } from '../controllers/post.controller';
import { PostService } from '../services/post.service';
import { CreatePostDto } from '../dto/createPost.dto';

@Module({
  controllers: [PostsController],
  providers: [PostService, CreatePostDto],
})
export class PostModule {}
