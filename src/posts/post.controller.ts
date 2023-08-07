import {
  Body,
  Controller,
  Get,
  HttpCode,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
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
  searchAll(@Query('postId') postId: string) {
    if (postId) {
      return this.postService.search(postId);
    } else {
      return this.postService.searchAll();
    }
  }

  @Patch(':postId')
  @HttpCode(200)
  modifyByPostId(
    @Param('postId') postId: string,
    @Body() modifyPostRequestDto: CreatePostRequestDto,
  ) {
    return this.postService.modifyByPostId(postId, modifyPostRequestDto);
  }
}
