import { GetAllPostsResponseType } from '../../types/getAllPosts.response.type';

export class GetAllPostResponseDto {
  id: number;
  title: string;
  content: string;
  createdAt: Date;

  constructor(responseData: GetAllPostsResponseType) {
    this.id = responseData.id;
    this.title = responseData.title;
    this.content = responseData.content;
    this.createdAt = responseData.createdAt;
  }
}
