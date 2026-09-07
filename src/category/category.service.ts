import { Injectable } from '@nestjs/common';

@Injectable()
export class CategoryService {
  getCategories(): { id: number; name: string }[] {
    return [
      { id: 1, name: 'Category 1' },
      { id: 2, name: 'Category 2' },
      { id: 3, name: 'Category 3' },
    ];
  }

  getCategoryById(id: number): { id: number; name: string } | undefined {
    const categories = this.getCategories();
    return categories.find((category) => category.id === id);
  }
}
