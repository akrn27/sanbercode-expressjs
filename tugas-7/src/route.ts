import express from "express";
const router = express.Router();
import cloudinary from "./utils/cloudinary";
import { single, multiple } from "./middlewares/upload.middleware";

router.post("/upload/single", single, (req: any, res: any) => {
  cloudinary.uploader.upload(req.file.path, (err: any, result: any) => {
    if (err) {
      console.log(err);
      return res.status(500).json({
        success: false,
        message: "Error",
      });
    }
    res.status(200).json({
      success: true,
      message: "Uploaded!",
      data: result,
    });
  });
});

router.post("/upload/multiple", multiple, async (req: any, res: any) => {
    try {
      if (!req.files) {
        return res.status(400).json({ message: "No files uploaded" });
      }
  
      const uploadedFiles: { filename: string; path: string; size: number; mimetype: string, url: string }[] = [];
  
      for (const file of req.files) {
        const uploadResult = await cloudinary.uploader.upload(file.path)

        uploadedFiles.push({
          filename: file.originalname,
          path: file.path,
          size: file.size,
          mimetype: file.mimetype,
          url: uploadResult.secure_url
        });
      }
  
      res.json({ message: "Files uploaded successfully", uploadedFiles });
    } catch (error) {
      console.error("Error uploading files:", error);
      res.status(500).json({ message: "Upload failed" });
    }
  });

export default router;
