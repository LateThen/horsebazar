"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.postUpload = exports.deleteHorse = exports.updateHorse = exports.createHorse = exports.getHorseById = exports.getAllHorses = void 0;
const bcrypt_1 = require("bcrypt");
const index_1 = __importDefault(require("../models/index"));
const Horses = index_1.default.horsetable;
const Horse = require("../models/horses");
const imageController = require("../controllers/image");
const getAllHorses = async (req, res) => {
    try {
        const posts = await Horses.findAll();
        if (!posts || posts.length === 0)
            return res.status(500).send({ message: "Posts not found" });
        return res.status(200).send({ message: "Posts found", payload: posts });
    }
    catch (err) {
        console.log(err);
        res.status(500).end();
    }
};
exports.getAllHorses = getAllHorses;
const getHorseById = async (req, res) => {
    try {
        const { id } = req.params;
        if (!id)
            return res.status(400).send({ message: "Missing details!" });
        const post = await Horses.findOne({ where: { id: id } });
        if (!post)
            return res.status(500).send({ message: "Post not found" });
        return res.status(200).send({ message: "Post found", payload: { post } });
    }
    catch (err) {
        console.log(err);
        res.status(500).end();
    }
};
exports.getHorseById = getHorseById;
const createHorse = async (req, res) => {
    try {
        const { name, phonenumber, location, price, description, postname, photo } = req.body;
        const post = await Horses.findOne({ where: { description: description } });
        if (post)
            return res.status(400).send({ message: "Post already exists" });
        const salt = await (0, bcrypt_1.genSalt)(10);
        const createdHorse = await Horses.create({
            name: name,
            phonenumber: phonenumber,
            location: location,
            price: price,
            description: description,
            postname: postname,
            photo: "http://localhost:3000/img/" + req.body.filename,
        });
        return res.status(201).send({ message: "Post created" });
    }
    catch (err) {
        console.log(err);
        res.status(500).end();
    }
};
exports.createHorse = createHorse;
const updateHorse = async (req, res) => {
    try {
        const { id } = req.params;
        const data = req.body;
        if (!id || !data)
            return res.status(400).send({ message: "Missing details!" });
        const post = await Horses.findOne({ where: { id: id } });
        if (!post)
            return res.status(500).send({ message: "Post not found" });
        for (const ops of data) {
            post[ops.propName] = ops.value;
        }
        const action = await post.save();
        if (!action)
            return res.status(500).send({ message: "Something went wrong!" });
        return res.status(200).send({ message: "Post updated", payload: post });
    }
    catch (err) {
        console.log(err);
        res.status(500).end();
    }
};
exports.updateHorse = updateHorse;
const deleteHorse = async (req, res) => {
    try {
        const { id } = req.params;
        if (!id)
            return res.status(400).send({ message: "Missing details!" });
        const post = await Horses.destroy({ where: { id: id } });
        if (!post)
            return res.status(500).send({ message: "Post not found" });
        return res.status(200).send({ message: "Post deleted" });
    }
    catch (err) {
        console.log(err);
        res.status(500).end();
    }
};
exports.deleteHorse = deleteHorse;
const uploadFile = imageController.upload.single("photo");
const saveFileIntoFolder = (req, res, next) => {
    uploadFile(req, res, (err) => {
        if (err) {
            console.log(err);
            /*switch(err.message) {
              case "Missing details":
                return res.status(400).send({msg: "Nejsou detaily :("})
            }*/
            console.log("error while uploading file");
            return res.status(500).send(err);
        }
        console.log("File uploaded");
        next();
    });
};
exports.postUpload = [saveFileIntoFolder, exports.createHorse];
