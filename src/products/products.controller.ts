import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
  Put,
  HttpStatus,
  HttpCode,
  Res
} from '@nestjs/common';
import { ProductsService } from './products.service';
// import { CreateProductDto } from './dto/create-product.dto';
// import { UpdateProductDto } from './dto/update-product.dto';
import { Response } from 'express';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Get('')
  getProducts(
    // @Query('limit') limit = 100,
    // @Query('offset') offset = 0,
    // @Query('brand') brand: string
  ) {
    return this.productsService.findAll()
  }

  @Get('filter')
  getProductFilter() {
    return "{im a filter}"
  }

  @Get(':productId')
  @HttpCode(HttpStatus.ACCEPTED)
  getOne( @Res() response: Response , @Param('id') id: number) {
    return this.productsService.findOne(id)

}

  @Post()
  create(@Body() payload: any) {
    return this.productsService.create(payload)
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() payload: any) {
    return this.productsService.update(id, payload)
  }

  @Delete(':id')
  delete(@Param('id') id: number,) {
    return this.productsService.delete(id)
  }
}
