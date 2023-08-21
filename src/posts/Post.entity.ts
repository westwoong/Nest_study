import { Column, Entity, OneToMany } from 'typeorm';
import { DefaultEntityColumn } from '../config/default.entity';
import { Comment } from '../comments/Comment.entity';
import { PostToCategory } from './category/PostToCategory.entity';

@Entity('posts')
export class Post extends DefaultEntityColumn {
  @Column({ nullable: false })
  title: string;

  @Column({ nullable: false })
  content: string;

  @OneToMany(() => Comment, (comment) => comment.post)
  comments: Comment[];

  @OneToMany(() => PostToCategory, (postToCategory) => postToCategory.post)
  postToCategories: PostToCategory[];
}
