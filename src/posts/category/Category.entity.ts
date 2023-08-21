import { Column, Entity } from 'typeorm';

@Entity('category')
export class PostCategoryEntity {
  @Column()
  postType: string;
}
