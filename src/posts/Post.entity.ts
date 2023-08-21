import { Column, Entity, OneToMany } from 'typeorm';
import { DefaultEntity } from '../config/default.entity';
import { Comment } from '../comments/Comment.entity';

@Entity('posts')
export class Post extends DefaultEntity {
  @Column()
  title: string;

  @Column()
  content: string;

  @OneToMany(() => Comment, (comment) => comment.post)
  comments: Comment[];
}
