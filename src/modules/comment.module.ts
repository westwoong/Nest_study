import { Module } from '@nestjs/common';
import { CommentController } from '../controllers/comment.controller';
import { CommentService } from '../services/comment.service';
import { CreateCommentDto } from '../dto/createComment.dto';

@Module({
  controllers: [CommentController],
  providers: [CommentService, CreateCommentDto],
})
export class CommentModule {}
