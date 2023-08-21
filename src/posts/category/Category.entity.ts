import { Column, Entity, OneToMany } from 'typeorm';
import { DefaultEntityColumn } from '../../config/default.entity';
import { PostToCategory } from './PostToCategory.entity';

@Entity('category')
export class Category extends DefaultEntityColumn {
  @Column()
  name: string;

  @OneToMany(() => PostToCategory, (postToCategory) => postToCategory.category)
  postToCategories: PostToCategory[];
}
