"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const path = require("path");
const multer = require("multer");
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.join(__dirname, "../public/img"));
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + file.originalname);
    },
});
const filter = (req, file, cb) => {
    //TODO validace here a na klientovi
    file.mimetype === "image/jpeg" ||
        file.mimetype === "image/png" ||
        file.mimetype === "image/gif"
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
