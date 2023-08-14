import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserRequestDto } from './dto/createUser.request.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './User.entity';
import { CreateUserResponseDto } from './dto/createUser.response.dto';
import { SearchUserResponseDto } from './dto/searchUser.response.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async signUp(userSignUpData: CreateUserRequestDto) {
    const { name, phoneNumber, address, companyName, businessNumber } =
      userSignUpData;

    const user = new User(
      name,
      phoneNumber,
      address,
      companyName,
      businessNumber,
    );

    const savedUser = await this.userRepository.save(user);

    return new CreateUserResponseDto(savedUser).welcome();
  }

  async searchSeller(sellerName: string) {
    // const seller = await this.userRepository.findOne({
    //   where: { name: sellerName },
    //   relations: ['products'],
    // });
    const seller = await this.userRepository
      .createQueryBuilder('user')
      .leftJoinAndSelect('user.products', 'products')
      .where('user.name = :sellerName', { sellerName })
      .getOne();

    if (!seller) {
      throw new NotFoundException('해당 셀러 없음');
    }

    const response = {
      name: seller.name,
      companyName: seller.companyName,
      productList: seller.products.map((product) => ({
        productName: product.name,
        price: product.price,
      })),
    };

    console.log(response);
    return new SearchUserResponseDto(response);
  }
}
