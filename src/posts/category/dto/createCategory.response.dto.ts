import { CreateCategoryResponseType } from '../../../types/createCategory.response.type';

export class CreateCategoryResponseDto {
  id: number;
  name: string;
  createdAt: Date;

  constructor(responseData: CreateCategoryResponseType) {
    this.id = responseData.id;
    this.name = responseData.name;
    this.createdAt = responseData.createdAt;
  }
}
