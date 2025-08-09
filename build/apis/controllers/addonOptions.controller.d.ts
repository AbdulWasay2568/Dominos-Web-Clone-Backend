import { Request, Response } from 'express';
export declare const createAddonOptionController: (req: Request, res: Response) => Promise<void>;
export declare const getAllAddonOptionController: (_req: Request, res: Response) => Promise<void>;
export declare const getAddonOptionByIdController: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
export declare const updateAddonOptionController: (req: Request, res: Response) => Promise<void>;
export declare const removeAddonOptionController: (req: Request, res: Response) => Promise<void>;
