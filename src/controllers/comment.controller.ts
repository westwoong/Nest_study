import {
  Body,
  Controller,
  Post,
  Param,
  Delete,
  HttpCode,
  Get,
} from '@nestjs/common';
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

  @Get()
  @HttpCode(200)
  getComments(@Param('postId') postId: number): CreateCommentDto[] {
    return this.commentService.searchCommentsByPostId(postId);
  }

  @Delete(':commentId')
  @HttpCode(204)
  delete(@Param('commentId') commentId: number) {
    this.commentService.deleteByCommentId(commentId);
  }
}
