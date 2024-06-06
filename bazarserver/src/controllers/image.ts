const path = require("path");

const multer = require("multer");

const storage = multer.diskStorage({
  destination: function (req: Request, file: IFile, cb: CallableFunction) {
    cb(null, path.join(__dirname, "../public/img"));
  },
  filename: function (req: Request, file: IFile, cb: CallableFunction) {
    cb(null, Date.now() + file.originalname);
  },
});

const filter = (req: Request, file: IFile, cb: CallableFunction) => {
  const columns: any = req.body;
  const { name, phonenumber, location, price, description, postname} = columns;
  
  if (!name || !phonenumber || !location || !price || !description || !postname) return cb(new Error("Missing details"))
  
  file.mimetype === "image/jpeg" ||
  file.mimetype === "image/png" ||
  file.mimetype === "image/gif" ||
  file.mimetype === "image/webp" 
    ? cb(null, true)
    : cb(null, false);
};

exports.upload = multer({
  storage: storage,
  limits: {
    fileSize: 1024 * 1024 * 10,
  },
  fileFilter: filter,
});

export type IFile = {
  fieldname: string;
  originalname: string;
  encoding: string;
  mimetype: string;
  buffer: Buffer;
  size: number;
};