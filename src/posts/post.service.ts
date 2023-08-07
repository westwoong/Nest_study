import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Post } from './Post.entity';
import { Repository } from 'typeorm';
import { CreatePostRequestDto } from './dto/createPost.request.dto';
import { CreatePostResponseDto } from './dto/createPost.response.dto';
import { SearchPostResponseDto } from './dto/searchPost.response.dto';
import { parse } from 'ts-jest';

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

  async searchAll() {
    return await this.postRepository.find({});
  }

  async search(postId: string) {
    const parsingPostId = parseInt(postId);
    const searchedPost: Post | null = await this.postRepository.findOne({
      where: {
        id: parsingPostId,
      },
    });
    if (!searchedPost) {
      throw new NotFoundException('해당 게시물 없음');
    }
    return new SearchPostResponseDto(searchedPost);
  }

  async modifyByPostId(
    postId: string,
    modifyPostRequestDto: CreatePostRequestDto,
  ) {
    const { title, content } = modifyPostRequestDto;
    const parsingPostId = parseInt(postId);

    const modifyPostData = {
      title: title,
      content: content,
    };

    await this.postRepository.update(parsingPostId, modifyPostData);

    return await this.postRepository.findOne({
      where: { id: parsingPostId },
    });
  }

  async delete(postId: string) {
    const parsingPostId = parseInt(postId);
    await this.postRepository
      .createQueryBuilder('posts')
      .delete()
      .from(Post)
      .where('id = :id', { id: parsingPostId })
      .execute();
  }
}
