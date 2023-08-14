import { Injectable } from '@nestjs/common';
import { CreateUserRequestDto } from './dto/createUser.request.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './User.entity';
import { CreateUserResponseDto } from './dto/createUser.response.dto';

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
}
