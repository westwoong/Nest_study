import { Injectable } from '@nestjs/common';
import { CreateCommentDto } from '../dto/createComment.dto';

@Injectable()
export class CommentService {
  comment: CreateCommentDto;
  comments: CreateCommentDto[] = [
    {
      id: 1,
      title: '제목',
      content: '내용',
      postId: '1',
    },
    {
      id: 2,
      title: '제목2',
      content: '내용2',
      postId: '1',
    },
    {
      id: 3,
      title: '제목3',
      content: '내용3',
      postId: '1',
    },
    {
      id: 4,
      title: '제목',
      content: '내용',
      postId: '2',
    },
    {
      id: 5,
      title: '제목2',
      content: '내용2',
      postId: '3',
    },
    {
      id: 6,
      title: '제목3',
      content: '내용3',
      postId: '4',
    },
  ];

  createComment(
    postId: string,
    commentBody: CreateCommentDto,
  ): CreateCommentDto {
    this.comment = commentBody;
    this.comment.postId = postId;
    return this.comment;
  }

  searchCommentsByPostId(postId: string): CreateCommentDto[] {
    return this.comments.filter(
      (comment: CreateCommentDto): boolean =>
        comment.postId.toString() === postId,
    );
  }

  deleteByCommentId(commentId: string): void {
    const commentIndex = this.comments.findIndex(
      (comment: CreateCommentDto): boolean =>
        comment.id.toString() === commentId,
    );
    delete this.comments[commentIndex];
  }
}
