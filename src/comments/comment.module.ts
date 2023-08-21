import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Comment } from './Comment.entity';
import { CommentController } from './comment.controller';
import { CommentService } from './comment.service';
import { Post } from '../posts/Post.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Comment, Post])],
  controllers: [CommentController],
  providers: [CommentService],
})
export class CommentModule {}
