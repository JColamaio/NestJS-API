import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Product } from './entities/product.entity';
@Injectable()
export class ProductsService {
  private counterId = 1;
  private products: Product[] = [
    {
      id: 1,
      name: 'Product 1',
      description: 'garloop',
      price: 100,
      image: '',
      stock: 100,
    },
  ];

  create(payload: CreateProductDto) {
    this.counterId = this.counterId + 1;

    const NewProduct = {
      id: this.counterId,
      ...payload,
    };
    this.products.push(NewProduct);
    return NewProduct;
  }

  findAll() {
    return this.products;
  }

  findOne(id: number) {
    const product = this.products.find((item) => item.id === id);
    if(!product){
      throw new NotFoundException(`Product ${id} no existe` )
    }
    return product

  }

  update(id: number, payload: any) {
    const index = this.products.findIndex((product) => product.id == id);
    if (index >= 0) {
      this.products[index] = {
        ...this.products[index],
        ...payload,
      };

      return this.products[index];
    }

    return null;
  }

  delete(productId: number) {
    const index = this.products.findIndex((item) => item.id === productId)
    if ( index === -1) {
      throw new NotFoundException(`Product ${productId} not found`)
    }
    this.products.splice(index, 1)
    return true
  }
}
