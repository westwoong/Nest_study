import { GetPostByIdResponseType } from '../../types/getPostById.response.type';
import { Post } from '../Post.entity';

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

  // constructor(responseData: GetPostByIdResponseType) {
  //   this.category = responseData.category;
  //   this.postId = responseData.postId;
  //   this.title = responseData.title;
  //   this.content = responseData.content;
  //   this.createdAt = responseData.createdAt;
  //   this.comments = responseData.comments;
  // }

  constructor(posts: Post[]) {
    const comments = posts[0].comments.map((comment) => ({
      id: comment.id,
      content: comment.content,
      createdAt: comment.createdAt,
    }));

    this.category = posts[0].postToCategories[0].category.name;
    this.postId = posts[0].id;
    this.title = posts[0].title;
    this.content = posts[0].content;
    this.createdAt = posts[0].createdAt;
    this.comments = comments;

    // const responseData = {
    //   category: posts[0].postToCategories[0].category.name,
    //   postId: posts[0].id,
    //   title: posts[0].title,
    //   content: posts[0].content,
    //   createdAt: posts[0].createdAt,
    //   comments: comments,
    // };
  }
}
