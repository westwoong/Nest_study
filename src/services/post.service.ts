import { Injectable } from '@nestjs/common';
import { CreatePostDto } from '../dto/createPost.dto';

@Injectable()
export class PostService {
  post: CreatePostDto;

  constructor() {}

  create(postData: CreatePostDto): object {
    this.post = postData;
    return this.post
  }
}
