import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  Post,
} from '@nestjs/common';
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

  @Delete('/:productId')
  @HttpCode(204)
  delete(@Param('productId') productId: string) {
    const parserProductId = parseInt(productId);
    return this.productService.deleteProduct(parserProductId);
  }

  @Get('/:productId')
  @HttpCode(200)
  search(@Param('productId') productId: string) {
    const parserProductId = parseInt(productId);
    return this.productService.searchBy(parserProductId);
  }
}
