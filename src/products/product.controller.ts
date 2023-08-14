import { Body, Controller, HttpCode, Post } from '@nestjs/common';
import { ProductService } from './product.service';
import { RegisterProductRequestDto } from './dto/registerProduct.request.dto';

@Controller('products')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Post()
  @HttpCode(201)
  register(@Body() registerProductDto: RegisterProductRequestDto) {
    return this.productService.register(registerProductDto);
  }
}
