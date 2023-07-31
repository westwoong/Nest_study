import { Body, Controller, HttpCode, Post } from '@nestjs/common';
import { PostService } from '../services/post.service';
import { CreatePostDto } from '../dto/createPost.dto';

@Controller('posts')
export class PostsController {
  constructor(private readonly postService: PostService) {
  }

  @Post()
  @HttpCode(201)
  create(@Body() postBody: CreatePostDto): object {
    return this.postService.create(postBody);
  }
}
