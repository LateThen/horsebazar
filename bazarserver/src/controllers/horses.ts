import { Request, Response } from "express";
import db from "../models/index";
import { genSalt, hash } from "bcrypt";

const Horse = db.horsetable;

export const getAllHorses = async (req: Request, res: Response) => {
  try {
    const Horses = await Horse.findAll();
    if (!Horses || Horses.length == 0)
      return res.status(500).send({ msg: "Horses not found" });
    return res.status(200).send({
      msg: "Horses found",
      payload: Horses,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
};

export const getHorseById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params; // const id = req.params.id
    if (!id) return res.status(400).send({ msg: "Missing details!" });
    const Horses = await Horse.findOne({ where: { id: id } });
    if (!Horses) return res.status(404).send({ msg: "Horses not found!" });
    return res.status(200).send({ msg: "Horse found!", payload: Horses });
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
};

export const createHorse = async (req: Request, res: Response) => {
  try {
    const { name, phonenumber, location, price, description, postname } = req.body;
    console.log(req.body);
    if (!name || !phonenumber || !location || !price)
      return res.status(400).send({ msg: "Missing details!" });
    const user = await Horse.findOne({ where: { postname: postname } });
    if (user) return res.status(400).send({ msg: "Post already exists!" });
    const salt = await genSalt(10); 
    const createdUser = await Horse.create({
      name: name,
      phonenumber: phonenumber,
      location: location,
      price: price,
      description: description,
      postname: postname
    });
    if (!createdUser)
      return res.status(500).send({ msg: "Something went wrong!" });
    await createdUser.addUserRole("user");
    return res.status(201).send({ msg: "User created", payload: createdUser });
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
};


export const updateHorse = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const data = req.body;
    if (!id || !data) return res.status(400).send({ msg: "Missing details!" });
    const Horses = await Horse.findOne({ where: { id: id } });
    if (!Horses) return res.status(500).send({ msg: "Horse not found" });
    for (const ops of data) {
        Horses[ops.propName] = ops.value;
    }
    const action = await Horses.save();
    if (!action) return res.status(500).send({ msg: "Something went wrong" });
    return res.status(200).send({ msg: "Horse updated!", payload: Horses });
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
};

export const deleteHorse = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    if (!id) return res.status(400).send({ msg: "Missing details!" });
    const Horses = await Horse.destroy({ where: { id: id } });
    if (!Horses) return res.status(400).send({ msg: "Horse not found!" });
    return res.status(200).send({ msg: "Horse deleted!" });
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
};
