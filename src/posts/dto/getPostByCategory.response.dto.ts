import { GetPostByCategoryResponseType } from '../../types/getPostByCategory.response.type';

export class GetPostByCategoryResponseDto {
  category: string;
  postList: Array<{
    id: number;
    title: string;
    content: string;
    createdAt: Date;
  }>;

  constructor(responseData: GetPostByCategoryResponseType) {
    this.category = responseData.category;
    this.postList = responseData.postList.map((post) => ({
      id: post.id,
      title: post.title,
      content: post.content,
      createdAt: post.createdAt,
    }));
  }
}
