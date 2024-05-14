"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteFood = exports.updateFood = exports.createFood = exports.getFoodById = exports.getAllFood = void 0;
const index_1 = __importDefault(require("../models/index"));
const Food = index_1.default.food;
const getAllFood = async (req, res) => {
    try {
        const food = await Food.findAll();
        if (!food || food.length == 0)
            return res.status(500).send({ msg: "Food not found" });
        return res.status(200).send({
            msg: "Food found",
            payload: food,
        });
    }
    catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
};
exports.getAllFood = getAllFood;
const getFoodById = async (req, res) => {
    try {
        const { id } = req.params; // const id = req.params.id
        if (!id)
            return res.status(400).send({ msg: "Missing details!" });
        const food = await Food.findOne({ where: { id: id } });
        if (!food)
            return res.status(404).send({ msg: "Food not found!" });
        return res.status(200).send({ msg: "Food found!", payload: food });
    }
    catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
};
exports.getFoodById = getFoodById;
const createFood = async (req, res) => {
    try {
        const { mealName, tableText, cal, carb, fat, proteins, sugar, salt, weight, image, } = req.body;
        if (!tableText ||
            !cal ||
            !carb ||
            !fat ||
            !proteins ||
            !sugar ||
            !salt ||
            !weight ||
            !image)
            return res.status(400).send({ msg: "Missing details!" });
        const food = await Food.findOne({ where: { mealName: mealName } });
        if (food)
            return res.status(400).send({ msg: "Food already exists!" });
        const createdFood = await Food.create({
            mealName: mealName,
            tableText: tableText,
            cal: cal,
            carb: carb,
            fat: fat,
            proteins: proteins,
            sugar: sugar,
            salt: salt,
            weight: weight,
            image: image,
        });
        if (!createdFood)
            return res.status(500).send({ msg: "Something went wrong!" });
        return res.status(201).send({ msg: "Food created", payload: createdFood });
    }
    catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
};
exports.createFood = createFood;
const updateFood = async (req, res) => {
    try {
        const { id } = req.params;
        const data = req.body;
        if (!id || !data)
            return res.status(400).send({ msg: "Missing details!" });
        const food = await Food.findOne({ where: { id: id } });
        if (!food)
            return res.status(500).send({ msg: "Food not found" });
        for (const ops of data) {
            food[ops.propName] = ops.value;
        }
        const action = await food.save();
        if (!action)
            return res.status(500).send({ msg: "Something went wrong" });
        return res.status(200).send({ msg: "Food updated!", payload: food });
    }
    catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
};
exports.updateFood = updateFood;
const deleteFood = async (req, res) => {
    try {
        const { id } = req.params;
        if (!id)
            return res.status(400).send({ msg: "Missing details!" });
        const food = await Food.destroy({ where: { id: id } });
        if (!food)
            return res.status(400).send({ msg: "Food not found!" });
        return res.status(200).send({ msg: "Food deleted!" });
    }
    catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
};
exports.deleteFood = deleteFood;
