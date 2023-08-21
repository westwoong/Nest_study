import { Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Post } from '../Post.entity';
import { Category } from './Category.entity';

@Entity()
export class PostToCategory {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Post, (post) => post.postToCategories)
  post: Post;

  @ManyToOne(() => Category, (category) => category.postToCategories)
  category: Category;
}
