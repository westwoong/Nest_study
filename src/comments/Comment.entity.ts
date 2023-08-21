import { Column, Entity, ManyToOne, RelationId } from 'typeorm';
import { DefaultEntity } from '../config/default.entity';
import { Post } from '../posts/Post.entity';

@Entity('comments')
export class Comment extends DefaultEntity {
  @Column()
  content: string;

  @ManyToOne(() => Post, (post) => post.comments)
  post: Post;

  @RelationId((comment: Comment) => comment.post)
  postId: number;
}
