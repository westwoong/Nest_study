import { Body, Controller, HttpCode, Post } from '@nestjs/common';
import { CreatePostRequestDto } from './dto/createPost.request.dto';
import { PostService } from './post.service';

@Controller('posts')
export class PostController {
  constructor(private readonly postService: PostService) {}

  @Post()
  @HttpCode(201)
  create(@Body() createPostDto: CreatePostRequestDto) {
    return this.postService.create(createPostDto);
  }
}
