import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from './Product.entity';
import { Repository } from 'typeorm';
import { RegisterProductRequestDto } from './dto/registerProduct.request.dto';
import { RegisterProductResponseDto } from './dto/registerProduct.response.dto';
import { User } from '../users/User.entity';
import { SearchProductResponseDto } from './dto/searchProduct.response.dto';

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
    const deleteResult = await this.productRepository.delete(productId);
    // affected = 영향을 받는 행이 몇개인지 출력해줌 typeorm delete.affected
    if (deleteResult.affected !== 0) {
      throw new NotFoundException('delete error');
    }
  }

  async searchBy(productId: number) {
    const searchedProduct = await this.productRepository
      .createQueryBuilder('product')
      .select([
        'user.name As userName',
        'user.company_name As companyName ',
        'product.name As productName',
        'product.*',
      ])
      .innerJoin('product.user', 'user')
      .where('product.id = :productId', { productId })
      .getRawOne();

    if (!searchedProduct) {
      throw new NotFoundException('해당 상품 없음');
    }
    console.log(searchedProduct);
    return new SearchProductResponseDto(searchedProduct);
  }
}
