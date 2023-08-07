import { Body, Controller, Get, HttpCode, Param, Post } from '@nestjs/common';
import { PostService } from './post.service';
import { CreatePostRequestDto } from './dto/createPost.request.dto';

@Controller('posts')
export class PostsController {
  constructor(private readonly postService: PostService) {}

  @Post()
  @HttpCode(201)
  create(@Body() createPostRequestDto: CreatePostRequestDto) {
    return this.postService.create(createPostRequestDto);
  }

  @Get()
  @HttpCode(200)
  searchAll() {
    return this.postService.searchAll();
  }

  @Get(':postId')
  @HttpCode(200)
  searchByPostId(@Param('postId') postId: string) {
    return this.postService.search(postId);
  }
}
