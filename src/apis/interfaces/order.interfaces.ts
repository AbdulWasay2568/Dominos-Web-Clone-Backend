import { OrderStatus } from './enums.interface';
import { CreateOrderItemDto } from './orderItem.interface'

export interface CreateOrderDto {
  userId: number;
  totalAmount: number;
  status?: OrderStatus;
  orderItems: CreateOrderItemDto[];
}

export interface UpdateOrderDto {
  totalAmount?: number;
  status?: OrderStatus;
  orderItems?: CreateOrderItemDto[];
}

