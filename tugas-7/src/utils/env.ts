const CLOUD_NAME = process.env.CLOUDINARY_CLOUD_NAME;
const API_KEY = process.env.CLOUDINARY_API_KEY;
const API_SECRET = process.env.CLOUDINARY_API_SECRET;

export const CLOUDINARY_API_KEY: string = API_KEY || "";
export const CLOUDINARY_API_SECRET: string =
  API_SECRET || "";
export const CLOUDINARY_CLOUD_NAME: string =
  CLOUD_NAME || "";
