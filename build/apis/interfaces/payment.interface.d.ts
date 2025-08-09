import { PaymentStatus } from './enums.interface.js';
export interface CreatePaymentDto {
    orderId: number;
    amount: number;
    method: string;
    status?: PaymentStatus;
}
export interface UpdatePaymentDto {
    amount?: number;
    method?: string;
    status?: PaymentStatus;
}
