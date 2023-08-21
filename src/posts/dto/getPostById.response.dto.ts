import { GetPostByIdResponseType } from '../../types/getPostById.response.type';

export class GetPostByIdResponseDto {
  category: string;
  postId: number;
  title: string;
  content: string;
  createdAt: Date;
  comments: Array<{
    id: number;
    content: string;
    createdAt: Date;
  }>;

  constructor(responseData: GetPostByIdResponseType) {
    this.category = responseData.category;
    this.postId = responseData.postId;
    this.title = responseData.title;
    this.content = responseData.content;
    this.createdAt = responseData.createdAt;
    this.comments = responseData.comments;
  }
}
