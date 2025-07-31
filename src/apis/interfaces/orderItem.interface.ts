export interface CreateOrderItemDto {
  productId: number;
  quantity: number;
  addonOptions: number[];

}

export interface UpdateOrderItemDto {
  quantity?: number;
  addonOptions: number[];
}
