import { Body, Controller, HttpCode, Post } from '@nestjs/common';
import { CategoryService } from './category.service';
import { CreateCategoryRequestDto } from './dto/createCategory.request.dto';

@Controller('categories')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  @Post()
  @HttpCode(201)
  create(@Body() createCategoryData: CreateCategoryRequestDto) {
    return this.categoryService.create(createCategoryData);
  }
}
