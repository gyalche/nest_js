import { Injectable } from '@nestjs/common';

@Injectable()
export class ProductService {
  private products: { id: number; name: string }[] = [
    { id: 1, name: 'Product 1' },
    { id: 2, name: 'Product 2' },
    { id: 3, name: 'Product 3' },
  ];

  getProducts(): { id: number; name: string }[] {
    return this.products;
  }

  getProductById(id: number): { id: number; name: string } | undefined {
    return this.products.find((product) => product.id === id);
  }
}
