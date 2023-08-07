import { IPost } from '../interface/post.response.interface';

export class SearchPostResponseDto implements IPost {
  id: number;
  title: string;
  content: string;

  constructor(savedPost: IPost) {
    this.id = savedPost.id;
    this.title = savedPost.title;
    this.content = savedPost.content;
  }
}
