import cloudinary from '../utils/cloudinary';
import { UploadApiResponse } from 'cloudinary';
import { Readable } from 'stream';

export const uploadToCloudinary = async (
  buffer: Buffer,
  folder: string,
  public_id?: string
): Promise<UploadApiResponse> => {
  return new Promise((resolve, reject) => {
    const stream = cloudinary.uploader.upload_stream(
      {
        folder,
        public_id,
        overwrite: true,
        resource_type: 'image',
      },
      (err, result) => {
        if (err) reject(err);
        else resolve(result!);
      }
    );

    Readable.from(buffer).pipe(stream);
  });
};

export const deleteFromCloudinary = async (imageUrl: string): Promise<void> => {
  const parts = imageUrl.split('/');
  const publicIdWithExt = parts[parts.length - 1];
  const publicId = publicIdWithExt.split('.')[0];

  const folder = parts.slice(parts.indexOf('dominos')).slice(0, -1).join('/'); // e.g., dominos/users/customer
  const fullPublicId = `${folder}/${publicId}`;

  await cloudinary.uploader.destroy(fullPublicId);
};
