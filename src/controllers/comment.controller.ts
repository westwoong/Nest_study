import { Body, Controller, Post, Param } from '@nestjs/common';
import { CommentService } from '../services/comment.service';
import { CreateCommentDto } from '../dto/createComment.dto';

@Controller('posts/:postId/comments')
export class CommentController {
  constructor(private readonly commentService: CommentService) {}

  @Post()
  create(
    @Param('postId') postId: number,
    @Body() commentBody: CreateCommentDto,
  ) {
    return this.commentService.createComment(postId, commentBody);
  }
}
