import { IPost } from '../interface/post.response.interface';

export class CreatePostResponseDto implements IPost {
  id: number;
  title: string;
  content: string;

  constructor(IPost: IPost) {
    this.id = IPost.id;
    this.title = IPost.title;
    this.content = IPost.content;
  }
}
