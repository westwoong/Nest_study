import { Injectable } from '@nestjs/common';
import { CreatePostDto } from '../dto/createPost.dto';

@Injectable()
export class PostService {
  post: CreatePostDto;
  posts: CreatePostDto[] = [
    {
      id: 1,
      title: '제목',
      content: '내용',
    },
    {
      id: 2,
      title: '제목2',
      content: '내용2',
    },
    {
      id: 3,
      title: '제목3',
      content: '내용3',
    },
  ];

  constructor() {}

  create(postData: CreatePostDto): object {
    this.post = postData;
    return this.post;
  }

  searchAll(): CreatePostDto[] {
    return this.posts;
  }

  findOne(postId: number): CreatePostDto | undefined {
    return this.posts.find((post: CreatePostDto): boolean => post.id == postId);
  }
}
