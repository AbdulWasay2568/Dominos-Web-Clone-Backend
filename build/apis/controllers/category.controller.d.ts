import { Request, Response } from 'express';
export declare const createCategoryCategory: (req: Request, res: Response) => Promise<void>;
export declare const getAllCategoryCategory: (_req: Request, res: Response) => Promise<void>;
export declare const getCategoryByIdCategory: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
export declare const updateCategoryCategory: (req: Request, res: Response) => Promise<void>;
export declare const removeCategoryCategory: (req: Request, res: Response) => Promise<void>;
