import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import { DefaultEntityColumn } from '../config/default.entity';
import { Post } from '../posts/Post.entity';
import { CreateCommentRequestDto } from './dto/createComment.request.dto';

@Entity('comments')
export class Comment extends DefaultEntityColumn {
  @Column({ nullable: false })
  content: string;

  @ManyToOne(() => Post, (post) => post.comments, { nullable: false })
  @JoinColumn()
  post: Post;

  constructor(createCommentData: CreateCommentRequestDto) {
    super();
    if (createCommentData) {
      this.content = createCommentData.content;
    }
  }
}
