import { ConflictException, Injectable } from '@nestjs/common';
import { CreateCategoryRequestDto } from './dto/createCategory.request.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Category } from './Category.entity';
import { Repository } from 'typeorm';
import { Transactional } from 'typeorm-transactional';
import { CreateCategoryResponseDto } from './dto/createCategory.response.dto';

@Injectable()
export class CategoryService {
  constructor(
    @InjectRepository(Category)
    private readonly categoryRepository: Repository<Category>,
  ) {}

  @Transactional()
  async create(categoryDate: CreateCategoryRequestDto) {
    const categoryName = categoryDate.name;
    const isExistCategory = await this.categoryRepository.findOne({
      where: { name: categoryName },
    });

    if (isExistCategory) {
      throw new ConflictException('이미 존재하는 카테고리입니다.');
    }

    const category = new Category(categoryDate);
    const savedCategory = await this.categoryRepository.save(category);
    return new CreateCategoryResponseDto(savedCategory);
  }

  async getCategories() {
    const getCategoriesData = await this.categoryRepository.find();
    console.log(getCategoriesData);

    return getCategoriesData.map((category) => {
      return {
        id: category.id,
        name: category.name,
      };
    });
  }
}
