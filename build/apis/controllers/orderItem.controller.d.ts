import { Request, Response } from 'express';
export declare const createOrderItemController: (req: Request, res: Response) => Promise<void>;
export declare const getAllOrderItemController: (_req: Request, res: Response) => Promise<void>;
export declare const getOrderItemByIdController: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
export declare const updateOrderItemController: (req: Request, res: Response) => Promise<void>;
export declare const removeOrderItemController: (req: Request, res: Response) => Promise<void>;
