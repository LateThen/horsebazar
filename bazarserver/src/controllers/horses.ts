import { NextFunction, Request, Response } from "express";
import { genSalt, hash } from "bcrypt";
import db from "../models/index";
const Horses = db.horsetable;
const Horse = require("../models/horses");
const imageController = require("../controllers/image");

export const getAllHorses = async (req: Request, res: Response) => {
  try {
    const posts: any = await Horses.findAll();
    if (!posts || posts.length === 0)
      return res.status(500).send({ message: "Posts not found" });
    return res.status(200).send({ message: "Posts found", payload: posts });
  } catch (err) {
    console.log(err);
    res.status(500).end();
  }
};
export const getHorseById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    if (!id) return res.status(400).send({ message: "Missing details!" });
    const post: any = await Horses.findOne({ where: { id: id } });
    if (!post) return res.status(500).send({ message: "Post not found" });
    return res.status(200).send({ message: "Post found", payload: { post } });
  } catch (err) {
    console.log(err);
    res.status(500).end();
  }
};
export const createHorse = async (req: Request, res: Response) => {
  try {
    const { name, phonenumber, location, price, description, postname, password, category} = req.body;
    const post: any = await Horses.findOne({ where: { description: description } });
    if (post) return res.status(400).send({ message: "Post already exists" });
    const salt = await genSalt(10);
    const createdHorse = await Horses.create({
      name: name,
      phonenumber: phonenumber,
      location: location,
      price: price,
      description: description,
      postname: postname,
      photo: "http://localhost:3000/img/" + req.file?.filename,
      password: password,
      category: category
 
    });
    return res.status(201).send({ message: "Post created" });
  } catch (err) {
    console.log(err);
    res.status(500).end();
  }
};
export const updateHorse = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const data = [
      {
        propName: "name",
        value: req.body.name
      },
      {
        propName: "phonenumber",
        value: req.body.phonenumber
      },
      {
        propName: "location",
        value: req.body.location
      },
      {
        propName: "price",
        value: req.body.price
      },
      {
        propName: "description",
        value: req.body.description
      },
      {
        propName: "postname",
        value: req.body.postname
      },
      {
        propName: "password",
        value: req.body.password
      },
      {
        propName: "category",
        value: req.body.category
      },
      {
        propName: "photo",
        value: "http://localhost:3000/img/" + req.file?.filename
      }
    ];
    if (!id)
      return res.status(400).send({ message: "Missing details!" });
    const post: any = await Horses.findOne({ where: { id: id } });
    if (!post) return res.status(500).send({ message: "Post not found" });
    for (const ops of data) {
      post[ops.propName] = ops.value;
    }
    const action = await post.save();
    if (!action)
      return res.status(500).send({ message: "Something went wrong!" });
    return res.status(200).send({ message: "Post updated", payload: post });
  } catch (err) {
    console.log(err);
    res.status(500).end();
  }
};
export const deleteHorse = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    if (!id) return res.status(400).send({ message: "Missing details!" });
    const post: any = await Horses.destroy({ where: { id: id } });
    if (!post) return res.status(500).send({ message: "Post not found" });
    return res.status(200).send({ message: "Post deleted" });
  } catch (err) {
    console.log(err);
    res.status(500).end();
  }
};

const uploadFile = imageController.upload.single("photo");

const saveFileIntoFolder = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  uploadFile(req, res, (err: Error) => {
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

export const postUpload = [saveFileIntoFolder, createHorse];
export const updateUpload = [saveFileIntoFolder, updateHorse];