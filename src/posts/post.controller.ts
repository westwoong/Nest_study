import { Body, Controller, Get, HttpCode, Param, Post } from '@nestjs/common';
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
}
