import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { PostService } from '../services/post.service';
import { CreatePostDto } from '../dto/createPost.dto';

@Controller('posts')
export class PostsController {
  constructor(private readonly postService: PostService) {}

  @Post()
  @HttpCode(201)
  create(@Body() postBody: CreatePostDto): object {
    return this.postService.create(postBody);
  }

  @Get()
  @HttpCode(200)
  getPosts() {
    return this.postService.searchAll();
  }

  @Get(':postId')
  getPostOne(@Param('postId') postId: number) {
    return this.postService.findOne(postId);
  }

  @Patch(':postId')
  @HttpCode(200)
  modifyPost(@Param('postId') postId: number, @Body() postBody: CreatePostDto) {
    return this.postService.modifyPost(postId, postBody);
  }

  @Delete(':postId')
  @HttpCode(204)
  deletePost(@Param('postId') postId: number) {
    this.postService.delete(postId);
  }
}
