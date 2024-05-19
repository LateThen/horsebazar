import { Request, Response } from "express";
import db from "../models/index";
import { genSalt, hash } from "bcrypt";

const User = db.usertable;

export const getAllUsers = async (req: Request, res: Response) => {
  try {
    const Users = await User.findAll();
    if (!Users || Users.length == 0)
      return res.status(500).send({ msg: "Users not found" });
    return res.status(200).send({
      msg: "Users found",
      payload: Users,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
};

export const getUserById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params; // const id = req.params.id
    if (!id) return res.status(400).send({ msg: "Missing details!" });
    const Users = await User.findOne({ where: { id: id } });
    if (!Users) return res.status(404).send({ msg: "Users not found!" });
    return res.status(200).send({ msg: "User found!", payload: Users });
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
};
export const createUser = async (req: Request, res: Response)  => {
try {
  const { email, password } = req.body;
  if (!email || !password)
    return res.status(400).send({ msg: "Missing details!" });
  const user = await User.findOne({ where: { email: email } });
  if (user) return res.status(400).send({ msg: "User already exists!" });
  const salt = await genSalt(10);
  const passwordHash = await hash(password, salt);
  const createdUser = await User.create({
    email: email,
    password: passwordHash,
  });
  if (!createdUser)
    return res.status(500).send({ msg: "Something went wrong!" });
  return res.status(201).send({ msg: "User created", payload: createdUser });
} catch (error) {
  console.log(error);
  res.status(500).send(error);
}}

export const updateUser = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const data = req.body;
    if (!id || !data) return res.status(400).send({ msg: "Missing details!" });
    const Users = await User.findOne({ where: { id: id } });
    if (!Users) return res.status(500).send({ msg: "User not found" });
    for (const ops of data) {
        Users[ops.propName] = ops.value;
    }
    const action = await Users.save();
    if (!action) return res.status(500).send({ msg: "Something went wrong" });
    return res.status(200).send({ msg: "User updated!", payload: Users });
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
};

export const deleteUser = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    if (!id) return res.status(400).send({ msg: "Missing details!" });
    const Users = await User.destroy({ where: { id: id } });
    if (!Users) return res.status(400).send({ msg: "User not found!" });
    return res.status(200).send({ msg: "User deleted!" });
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
};
