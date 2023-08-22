import { Column, Entity, OneToMany } from 'typeorm';
import { DefaultEntityColumn } from '../../config/default.entity';
import { PostToCategory } from './PostToCategory.entity';
import { CreateCategoryRequestDto } from './dto/createCategory.request.dto';

@Entity('category')
export class Category extends DefaultEntityColumn {
  @Column()
  name: string;

  @OneToMany(() => PostToCategory, (postToCategory) => postToCategory.category)
  postToCategories: PostToCategory[];

  constructor(createCategoryData: CreateCategoryRequestDto) {
    super();
    if (createCategoryData) {
      this.name = createCategoryData.name;
    }
  }
}
