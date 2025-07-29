export interface CreateCartDto {
  userId: number;
}

export interface UpdateCartDto {
  userId?: number;
  productId?: number;
  quantity?: number;
}

export interface AddItemToCartDto {
  productId: number;
  quantity: number;
  addonOptionIds?: number[];
  userId: number;
}
