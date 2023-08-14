import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from './Product.entity';
import { Repository } from 'typeorm';
import { RegisterProductRequestDto } from './dto/registerProduct.request.dto';
import { RegisterProductResponseDto } from './dto/registerProduct.response.dto';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(Product)
    private readonly productRepository: Repository<Product>,
  ) {}

  async register(productData: RegisterProductRequestDto) {
    const { name, price, description } = productData;
    const product = new Product(name, price, description);
    const savedProduct = await this.productRepository.save(product);
    return new RegisterProductResponseDto(savedProduct);
  }
}
