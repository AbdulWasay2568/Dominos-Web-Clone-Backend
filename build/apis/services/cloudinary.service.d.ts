import { UploadApiResponse } from 'cloudinary';
export declare const uploadToCloudinary: (buffer: Buffer, folder: string, public_id?: string) => Promise<UploadApiResponse>;
export declare const deleteFromCloudinary: (imageUrl: string) => Promise<void>;
