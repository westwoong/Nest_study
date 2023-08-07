import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Post } from './Post.entity';
import { Repository } from 'typeorm';
import { CreatePostRequestDto } from './dto/createPost.request.dto';
import { CreatePostResponseDto } from './dto/createPost.response.dto';

@Injectable()
export class PostService {
  constructor(
    @InjectRepository(Post)
    private readonly postRepository: Repository<Post>,
  ) {}

  async create(createPostRequestDto: CreatePostRequestDto) {
    const { title, content } = createPostRequestDto;
    const post = new Post();
    post.title = title;
    post.content = content;
    const savedPost = await this.postRepository.save(post);
    return new CreatePostResponseDto(savedPost);
  }

  async searchAll() {}
}
