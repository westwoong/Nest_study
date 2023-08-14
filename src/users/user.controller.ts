import { Body, Controller, Get, HttpCode, Post, Query } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserRequestDto } from './dto/createUser.request.dto';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  @HttpCode(201)
  signUp(@Body() userData: CreateUserRequestDto) {
    return this.userService.signUp(userData);
  }

  @Get('/search')
  @HttpCode(200)
  search(@Query('seller') seller: string) {
    return this.userService.searchSeller(seller);
  }
}
