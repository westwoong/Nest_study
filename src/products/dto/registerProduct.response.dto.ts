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

  registeredProduct() {
    return `등록한 상품은 "${this.name}"이며, 가격은 ${this.price}원, 설명은 "${this.description}" 으로 등록되었습니다`;
  }
}
