export interface CreateCartDto {
    userId: number;
}
export interface UpdateCartDto {
    userId?: number;
    productId?: number;
}
export interface AddItemToCartDto {
    productId: number;
    quantity: number;
    addonOptionIds?: number[];
    userId: number;
}
