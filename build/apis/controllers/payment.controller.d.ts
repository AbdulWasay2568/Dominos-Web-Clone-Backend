import { Request, Response } from 'express';
export declare const createPaymentController: (req: Request, res: Response) => Promise<void>;
export declare const getAllPaymentController: (_req: Request, res: Response) => Promise<void>;
export declare const getPaymentByIdController: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
export declare const updatePaymentController: (req: Request, res: Response) => Promise<void>;
export declare const removePaymentController: (req: Request, res: Response) => Promise<void>;
