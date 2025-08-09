import { Request, Response } from 'express';
export declare const createProductReview: (req: Request, res: Response) => Promise<void>;
export declare const getAllProductReviews: (_req: Request, res: Response) => Promise<void>;
export declare const getProductReviewById: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
export declare const updateProductReview: (req: Request, res: Response) => Promise<void>;
export declare const deleteProductReview: (req: Request, res: Response) => Promise<void>;
