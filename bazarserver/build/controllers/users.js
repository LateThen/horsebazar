"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUser = exports.updateUser = exports.createUser = exports.getUserById = exports.getAllUsers = void 0;
const index_1 = __importDefault(require("../models/index"));
const bcrypt_1 = require("bcrypt");
const User = index_1.default.usertable;
const getAllUsers = async (req, res) => {
    try {
        const Users = await User.findAll();
        if (!Users || Users.length == 0)
            return res.status(500).send({ msg: "Users not found" });
        return res.status(200).send({
            msg: "Users found",
            payload: Users,
        });
    }
    catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
};
exports.getAllUsers = getAllUsers;
const getUserById = async (req, res) => {
    try {
        const { id } = req.params; // const id = req.params.id
        if (!id)
            return res.status(400).send({ msg: "Missing details!" });
        const Users = await User.findOne({ where: { id: id } });
        if (!Users)
            return res.status(404).send({ msg: "Users not found!" });
        return res.status(200).send({ msg: "User found!", payload: Users });
    }
    catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
};
exports.getUserById = getUserById;
const createUser = async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!email || !password)
            return res.status(400).send({ msg: "Missing details!" });
        const user = await User.findOne({ where: { email: email } });
        if (user)
            return res.status(400).send({ msg: "User already exists!" });
        const salt = await (0, bcrypt_1.genSalt)(10);
        const passwordHash = await (0, bcrypt_1.hash)(password, salt);
        const createdUser = await User.create({
            email: email,
            password: passwordHash,
        });
        if (!createdUser)
            return res.status(500).send({ msg: "Something went wrong!" });
        return res.status(201).send({ msg: "User created", payload: createdUser });
    }
    catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
};
exports.createUser = createUser;
const updateUser = async (req, res) => {
    try {
        const { id } = req.params;
        const data = req.body;
        if (!id || !data)
            return res.status(400).send({ msg: "Missing details!" });
        const Users = await User.findOne({ where: { id: id } });
        if (!Users)
            return res.status(500).send({ msg: "User not found" });
        for (const ops of data) {
            Users[ops.propName] = ops.value;
        }
        const action = await Users.save();
        if (!action)
            return res.status(500).send({ msg: "Something went wrong" });
        return res.status(200).send({ msg: "User updated!", payload: Users });
    }
    catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
};
exports.updateUser = updateUser;
const deleteUser = async (req, res) => {
    try {
        const { id } = req.params;
        if (!id)
            return res.status(400).send({ msg: "Missing details!" });
        const Users = await User.destroy({ where: { id: id } });
        if (!Users)
            return res.status(400).send({ msg: "User not found!" });
        return res.status(200).send({ msg: "User deleted!" });
    }
    catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
};
exports.deleteUser = deleteUser;
