import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from './Product.entity';
import { Repository } from 'typeorm';
import { RegisterProductRequestDto } from './dto/registerProduct.request.dto';
import { RegisterProductResponseDto } from './dto/registerProduct.response.dto';
import { User } from '../users/User.entity';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(Product)
    private readonly productRepository: Repository<Product>,
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async register(productData: RegisterProductRequestDto) {
    const { userName, name, price, description } = productData;
    const findUser = await this.userRepository.findOne({
      where: { name: userName },
    });
    console.log(findUser);

    if (!findUser) {
      throw new NotFoundException('해당 사용자 없음');
    }

    const product = new Product(name, price, description);
    console.log(product);
    product.user = findUser;

    const savedProduct = await this.productRepository.save(product);
    return new RegisterProductResponseDto(savedProduct).registeredProduct();
  }

  async deleteProduct(productId: number) {
    const deleteProduct = await this.productRepository.delete(productId);
    if (!deleteProduct) {
      throw new NotFoundException('없는 상품임');
    }
  }
}
