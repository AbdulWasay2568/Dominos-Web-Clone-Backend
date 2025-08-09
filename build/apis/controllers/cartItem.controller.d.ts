import { Request, Response } from 'express';
export declare const createCartItemController: (req: Request, res: Response) => Promise<void>;
export declare const getAllCartItemController: (_req: Request, res: Response) => Promise<void>;
export declare const getCartItemByIdController: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
export declare const updateCartItemController: (req: Request, res: Response) => Promise<void>;
export declare const removeCartItemController: (req: Request, res: Response) => Promise<void>;
