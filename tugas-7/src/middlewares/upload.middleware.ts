import multer from "multer";

const storage = multer.diskStorage({
  filename: function (req,file,cb) {
    cb(null, file.originalname)
  }
});

const upload = multer({
  storage: storage,
  limits: {
    fileSize: 1024 * 1024 * 5,
  },
});

export const single = upload.single("file");
export const multiple = upload.array("files", 10);

export default {
  single,
  multiple,
};
