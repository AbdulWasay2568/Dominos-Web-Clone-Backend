export interface CreateCartItemDto {
    cartId: number;
    productId: number;
    quantity: number;
}
export interface UpdateCartItemDto {
    quantity?: number;
}
export interface CartItem {
    cartId: number;
    productId: number;
    quantity: number;
}
