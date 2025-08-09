import { Request, Response, NextFunction } from "express";
export declare const authorizeRole: (...roles: string[]) => (req: Request & {
    user?: {
        role: string;
    };
}, res: Response, next: NextFunction) => Response<any, Record<string, any>> | undefined;
