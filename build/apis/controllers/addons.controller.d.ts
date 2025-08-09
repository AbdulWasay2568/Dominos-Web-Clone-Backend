import { Request, Response } from 'express';
export declare const createAddonController: (req: Request, res: Response) => Promise<void>;
export declare const getAllAddonController: (_req: Request, res: Response) => Promise<void>;
export declare const getAddonByIdController: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
export declare const removeAddonController: (req: Request, res: Response) => Promise<void>;
