export interface CreateOrderItemDto {
    orderId: number;
    productId: number;
    quantity: number;
    addonOptions: number[];
}
export interface UpdateOrderItemDto {
    quantity?: number;
    addonOptions: number[];
}
