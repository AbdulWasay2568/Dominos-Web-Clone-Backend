import { Request, Response } from 'express';
export declare const createFavouriteController: (req: Request, res: Response) => Promise<void>;
export declare const getAllFavouritesByUserIdController: (req: Request, res: Response) => Promise<void>;
export declare const getFavouriteByIdController: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
export declare const removeFavouriteController: (req: Request, res: Response) => Promise<void>;
