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

  @Patch('/:postId')
  @HttpCode(200)
  modify(
    @Param('postId') postId: string,
    @Body() modifyPostDto: CreatePostRequestDto,
  ) {
    const parsedPostId = parseInt(postId);
    return this.postService.modify(parsedPostId, modifyPostDto);
  }

  @Delete('/:postId')
  @HttpCode(204)
  delete(@Param('postId') postId: string) {
    const parsedPostId = parseInt(postId);
    return this.postService.delete(parsedPostId);
  }

  @Get()
  @HttpCode(200)
  getAllPosts() {
    return this.postService.getAllPosts();
  }

  @Get('/category/:categoryId')
  @HttpCode(200)
  getPostByCategory(@Param('categoryId') categoryId: string) {
    const parsedCategoryId = parseInt(categoryId);
    return this.postService.getPostsByCategory(parsedCategoryId);
  }

  @Get('/:postId')
  @HttpCode(200)
  getPostById(@Param('postId') postId: string) {
    const parsedPostId = parseInt(postId);
    return this.postService.getPostById(parsedPostId);
  }
}
