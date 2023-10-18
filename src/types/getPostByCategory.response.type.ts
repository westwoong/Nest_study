export interface GetPostByCategoryResponseType {
  category: string;
  postList: Array<{
    id: number;
    title: string;
    content: string;
    createdAt: Date;
  }>;
}
