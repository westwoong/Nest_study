import { Column, Entity, OneToMany } from 'typeorm';
import { DefaultEntityColumn } from '../config/default.entity';
import { Comment } from '../comments/Comment.entity';
import { PostToCategory } from './category/PostToCategory.entity';
import { PostConstructorType } from '../types/post.constructor.type';

@Entity('posts')
export class Post extends DefaultEntityColumn {
  @Column({ nullable: false })
  title: string;

  @Column({ nullable: false })
  content: string;

  @OneToMany(() => Comment, (comment) => comment.post, { onDelete: 'CASCADE' })
  comments: Comment[];

  @OneToMany(() => PostToCategory, (postToCategory) => postToCategory.post, {
    onDelete: 'CASCADE',
  })
  postToCategories: PostToCategory[];

  constructor(createPostData: PostConstructorType) {
    super();
    if (createPostData) {
      this.title = createPostData.title;
      this.content = createPostData.content;
    }
  }
}
