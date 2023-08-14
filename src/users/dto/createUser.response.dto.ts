import { User } from '../User.entity';

export class CreateUserResponseDto {
  name: string;

  constructor(signUpResponseData: User) {
    this.name = signUpResponseData.name;
  }

  welcome() {
    return `${this.name}님 회원가입 축하드립니다`;
  }
}
