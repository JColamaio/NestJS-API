import { Controller, Get, Param, Query } from '@nestjs/common';
import { get } from 'http';
import { AppService } from './app.service';

// non dynamic routes must be placed first
// dynamic routes afterwards
@Controller()
export class AppController {
  @Get('products')
  getProducts(
    @Query('limit') limit = 100,
    @Query('offset') offset = 0,
    @Query('brand') brand: string
  ) {
    return `products limit=> ${limit} offset=> ${offset} brand=> ${brand}`;
  }

  @Get('products/:productId')
  getProduct(@Param('productId') productId: string) {
    return `product ${productId}`;
  }

  @Get('categories/:id/products/:productId')
  getCategories(
    @Param('productId') productId: string,
    @Param('id') id: string
  ) {
    return `product ${productId} and ${id}`;
  }
}
