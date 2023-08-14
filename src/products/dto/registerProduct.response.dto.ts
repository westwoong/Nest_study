import { Product } from '../Product.entity';

export class RegisterProductResponseDto {
  name: string;
  price: number;
  description: string;

  constructor(responseProduct: Product) {
    this.name = responseProduct.name;
    this.price = responseProduct.price;
    this.description = responseProduct.description;
  }
}
