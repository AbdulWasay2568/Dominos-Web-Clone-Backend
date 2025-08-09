import { Request, Response } from 'express';
export declare const createAddressController: (req: Request, res: Response) => Promise<void>;
export declare const getAllAddressController: (_req: Request, res: Response) => Promise<void>;
export declare const getAddressByIdController: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
export declare const getAddressesByUserIdController: (req: Request, res: Response) => Promise<void>;
export declare const updateAddressController: (req: Request, res: Response) => Promise<void>;
export declare const removeAddressController: (req: Request, res: Response) => Promise<void>;
