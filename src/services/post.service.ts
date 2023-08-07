import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Post } from '../model/Post.entity';
import { Repository } from 'typeorm';
import { CreatePostRequestDto } from '../dto/createPost.request.dto';

@Injectable()
export class PostService {
  constructor(
    @InjectRepository(Post)
    private readonly postRepository: Repository<Post>,
  ) {}

  async create(createPostRequestDto: CreatePostRequestDto) {
    const { title, content } = createPostRequestDto;
    const post = new Post(title, content);
    await this.postRepository.save(post);
  }
}
