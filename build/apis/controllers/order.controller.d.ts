import { Request, Response } from 'express';
export declare const createOrderController: (req: Request, res: Response) => Promise<void>;
export declare const getAllOrderController: (_req: Request, res: Response) => Promise<void>;
export declare const getOrderByIdController: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
export declare const updateOrderController: (req: Request, res: Response) => Promise<void>;
export declare const removeOrderController: (req: Request, res: Response) => Promise<void>;
export declare const getOrderByUserIdController: (req: Request, res: Response) => Promise<void>;
