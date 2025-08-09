import { Request, Response } from 'express';
export declare const createShippingInformation: (req: Request, res: Response) => Promise<void>;
export declare const getAllShippingInformation: (_req: Request, res: Response) => Promise<void>;
export declare const getShippingInformationById: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
export declare const updateShippingInformation: (req: Request, res: Response) => Promise<void>;
export declare const removeShippingInformation: (req: Request, res: Response) => Promise<void>;
