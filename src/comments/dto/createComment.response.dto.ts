import { CreateCommentResponseType } from '../../types/createComment.response.type';

export class CreateCommentResponseDto {
  content: string;
  createdAt: Date;

  constructor(responseData: CreateCommentResponseType) {
    this.content = responseData.content;
    this.createdAt = responseData.createdAt;
  }
}
