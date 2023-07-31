import { Injectable } from '@nestjs/common';
import { CreateCommentDto } from '../dto/createComment.dto';

@Injectable()
export class CommentService {
  comment: CreateCommentDto;

  createComment(
    postId: number,
    commentBody: CreateCommentDto,
  ): CreateCommentDto {
    this.comment = commentBody;
    this.comment.postId = postId;
    return this.comment;
  }
}
