import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import { DefaultEntityColumn } from '../config/default.entity';
import { Post } from '../posts/Post.entity';

@Entity('comments')
export class Comment extends DefaultEntityColumn {
  @Column({ nullable: false })
  content: string;

  @ManyToOne(() => Post, (post) => post.comments, { nullable: false })
  @JoinColumn()
  post: Post;
}
