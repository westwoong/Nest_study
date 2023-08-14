import {
  Body,
  Controller,
  Delete,
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
export class PostController {
  constructor(private readonly postService: PostService) {}

  @Post()
  @HttpCode(201)
  create(@Body() createPostRequestDto: CreatePostRequestDto) {
    return this.postService.create(createPostRequestDto);
  }

  @Get('search')
  @HttpCode(200)
  searchKeyword(@Query('keyword') keyword: string) {
    console.log(keyword);
    console.log('키워드검색');
    return this.postService.searchByKeyword(keyword);
  }

  @Get(':postId')
  @HttpCode(200)
  searchByPostId(@Param('postId') postId: string) {
    console.log('일부 게시글 검색');
    return this.postService.search(postId);
  }

  @Get()
  @HttpCode(200)
  searchAll() {
    console.log('전체 게시글 검색');
    return this.postService.searchAll();
  }

  @Patch(':postId')
  @HttpCode(200)
  modifyByPostId(
    @Param('postId') postId: string,
    @Body() modifyPostRequestDto: CreatePostRequestDto,
  ) {
    return this.postService.modifyByPostId(postId, modifyPostRequestDto);
  }

  @Delete(':postId')
  @HttpCode(204)
  delete(@Param('postId') postId: string) {
    return this.postService.delete(postId);
  }
}
