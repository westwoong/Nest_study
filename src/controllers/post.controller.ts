import { Body, Controller, HttpCode, Post } from '@nestjs/common';
import { PostService } from '../services/post.service';
import { CreatePostRequestDto } from '../dto/createPost.request.dto';

@Controller('posts')
export class PostsController {
  constructor(private readonly postService: PostService) {}

  @Post()
  @HttpCode(201)
  create(@Body() createPostRequestDto: CreatePostRequestDto) {
    return this.postService.create(createPostRequestDto);
  }
}
