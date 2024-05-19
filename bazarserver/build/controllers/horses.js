"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteHorse = exports.updateHorse = exports.createHorse = exports.getHorseById = exports.getAllHorses = void 0;
const index_1 = __importDefault(require("../models/index"));
const Horse = index_1.default.horsetable;
const getAllHorses = async (req, res) => {
    try {
        const Horses = await Horse.findAll();
        if (!Horses || Horses.length == 0)
            return res.status(500).send({ msg: "Horses not found" });
        return res.status(200).send({
            msg: "Horses found",
            payload: Horses,
        });
    }
    catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
};
exports.getAllHorses = getAllHorses;
const getHorseById = async (req, res) => {
    try {
        const { id } = req.params; // const id = req.params.id
        if (!id)
            return res.status(400).send({ msg: "Missing details!" });
        const Horses = await Horse.findOne({ where: { id: id } });
        if (!Horses)
            return res.status(404).send({ msg: "Horses not found!" });
        return res.status(200).send({ msg: "Horse found!", payload: Horses });
    }
    catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
};
exports.getHorseById = getHorseById;
const createHorse = async (req, res) => {
    try {
        const createdUser = await Horse.create({});
        if (!createdUser)
            return res.status(201).send({ msg: "Horse created", payload: createdUser });
    }
    catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
};
exports.createHorse = createHorse;
const updateHorse = async (req, res) => {
    try {
        const { id } = req.params;
        const data = req.body;
        if (!id || !data)
            return res.status(400).send({ msg: "Missing details!" });
        const Horses = await Horse.findOne({ where: { id: id } });
        if (!Horses)
            return res.status(500).send({ msg: "Horse not found" });
        for (const ops of data) {
            Horses[ops.propName] = ops.value;
        }
        const action = await Horses.save();
        if (!action)
            return res.status(500).send({ msg: "Something went wrong" });
        return res.status(200).send({ msg: "Horse updated!", payload: Horses });
    }
    catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
};
exports.updateHorse = updateHorse;
const deleteHorse = async (req, res) => {
    try {
        const { id } = req.params;
        if (!id)
            return res.status(400).send({ msg: "Missing details!" });
        const Horses = await Horse.destroy({ where: { id: id } });
        if (!Horses)
            return res.status(400).send({ msg: "Horse not found!" });
        return res.status(200).send({ msg: "Horse deleted!" });
    }
    catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
};
exports.deleteHorse = deleteHorse;
