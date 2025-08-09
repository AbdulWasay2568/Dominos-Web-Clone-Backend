import { Request, Response } from 'express';
export declare const getAllCartsController: (_req: Request, res: Response) => Promise<void>;
export declare const createCartController: (req: Request, res: Response) => Promise<void>;
export declare const getCartByUserIdController: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
export declare const updateCartController: (req: Request, res: Response) => Promise<void>;
export declare const removeCartController: (req: Request, res: Response) => Promise<void>;
export declare const addItemToCartController: (req: Request, res: Response) => Promise<void>;
