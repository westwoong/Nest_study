import { Body, Controller, HttpCode, Param, Post } from '@nestjs/common';
import { CommentService } from './comment.service';
import { CreateCommentRequestDto } from './dto/createComment.request.dto';

@Controller('posts')
export class CommentController {
  constructor(private readonly commentService: CommentService) {}

  @Post(':postId/comments')
  @HttpCode(201)
  create(
    @Param('postId') postId: string,
    @Body() createCommentDto: CreateCommentRequestDto,
  ) {
    const parsedPostId = parseInt(postId);
    return this.commentService.create(parsedPostId, createCommentDto);
  }
}
