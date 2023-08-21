export interface GetPostByIdResponseType {
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
}
