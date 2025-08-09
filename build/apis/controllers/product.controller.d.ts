import { Request, Response } from 'express';
export declare const createProductController: (req: Request, res: Response) => Promise<void>;
export declare const getAllProductsController: (_req: Request, res: Response) => Promise<void>;
export declare const getProductByIdController: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
export declare const updateProductController: (req: Request, res: Response) => Promise<void>;
export declare const removeProductController: (req: Request, res: Response) => Promise<void>;
export declare const updateProductImage: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
export declare const createProductWithAddonsController: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
