import { Injectable, NotFoundException } from '@nestjs/common';
import { Transactional } from 'typeorm-transactional';
import { CreateCommentRequestDto } from './dto/createComment.request.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Comment } from './Comment.entity';
import { Post } from '../posts/Post.entity';
import { CreateCommentResponseDto } from './dto/createComment.response.dto';

@Injectable()
export class CommentService {
  constructor(
    @InjectRepository(Comment)
    private readonly commentRepository: Repository<Comment>,
    @InjectRepository(Post)
    private readonly postRepository: Repository<Post>,
  ) {}

  @Transactional()
  async create(postId: number, commentData: CreateCommentRequestDto) {
    const post = await this.postRepository.findOne({
      where: { id: postId },
    });

    if (!post) {
      throw new NotFoundException(`${postId}는 존재하지않습니다.`);
    }

    const createdComment = new Comment(commentData);
    createdComment.post = post;
    await this.commentRepository.save(createdComment);

    const responseData = {
      content: createdComment.content,
      createdAt: createdComment.createdAt,
    };

    return new CreateCommentResponseDto(responseData);
  }

  @Transactional()
  async delete(commentId: number) {
    const deleteComment = await this.commentRepository.delete(commentId);
    if (deleteComment.affected === 0) {
      throw new NotFoundException('해당 댓글 없어여');
    }
  }
}
