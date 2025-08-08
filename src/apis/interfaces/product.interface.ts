export interface CreateProductDto {
  name: string;
  description: string;
  price: number;
  categoryId: number;
}

export interface UpdateProductDto {
  name?: string;
  description?: string;
  price?: number;
  categoryId?: number;
}


export interface CreateProductWithAddonsDto {
  name: string;
  description: string;
  price: number;
  categoryId: number;
  addons?: {
    name: string;
    options: {
      name: string;
      price: number;
    }[];
  }[];
}
