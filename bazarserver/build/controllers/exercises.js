"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteExercise = exports.updateExercise = exports.createExercise = exports.getExerciseById = exports.getAllExercises = void 0;
const index_1 = __importDefault(require("../models/index"));
const Exercise = index_1.default.exercises;
const getAllExercises = async (req, res) => {
    try {
        const exercises = await Exercise.findAll();
        if (!exercises || exercises.length == 0)
            return res.status(500).send({ msg: "Exercises not found" });
        return res.status(200).send({
            msg: "Exercises found",
            payload: exercises,
        });
    }
    catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
};
exports.getAllExercises = getAllExercises;
const getExerciseById = async (req, res) => {
    try {
        const { id } = req.params; // const id = req.params.id
        if (!id)
            return res.status(400).send({ msg: "Missing details!" });
        const exercises = await Exercise.findOne({ where: { id: id } });
        if (!exercises)
            return res.status(404).send({ msg: "Exercises not found!" });
        return res
            .status(200)
            .send({ msg: "Exercises found!", payload: exercises });
    }
    catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
};
exports.getExerciseById = getExerciseById;
const createExercise = async (req, res) => {
    try {
        const { name, videoPath, exerciseDesc, smallDesc } = req.body;
        if (!name || !videoPath || !exerciseDesc || !smallDesc)
            return res.status(400).send({ msg: "Missing details!" });
        const exercises = await Exercise.findOne({ where: { name: name } });
        if (exercises)
            return res.status(400).send({ msg: "Exercise already exists!" });
        const createdExercise = await Exercise.create({
            name: name,
            videoPath: videoPath,
            exerciseDesc: exerciseDesc,
            smallDesc: smallDesc,
        });
        if (!createdExercise)
            return res.status(500).send({ msg: "Something went wrong!" });
        return res
            .status(201)
            .send({ msg: "Exercise created", payload: createdExercise });
    }
    catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
};
exports.createExercise = createExercise;
const updateExercise = async (req, res) => {
    try {
        const { id } = req.params;
        const data = req.body;
        if (!id || !data)
            return res.status(400).send({ msg: "Missing details!" });
        const exercises = await Exercise.findOne({ where: { id: id } });
        if (!exercises)
            return res.status(500).send({ msg: "Exercise not found" });
        for (const ops of data) {
            exercises[ops.propName] = ops.value;
        }
        const action = await exercises.save();
        if (!action)
            return res.status(500).send({ msg: "Something went wrong" });
        return res
            .status(200)
            .send({ msg: "Exercise updated!", payload: exercises });
    }
    catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
};
exports.updateExercise = updateExercise;
const deleteExercise = async (req, res) => {
    try {
        const { id } = req.params;
        if (!id)
            return res.status(400).send({ msg: "Missing details!" });
        const exercises = await Exercise.destroy({ where: { id: id } });
        if (!exercises)
            return res.status(400).send({ msg: "Exercise not found!" });
        return res.status(200).send({ msg: "Exercise deleted!" });
    }
    catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
};
exports.deleteExercise = deleteExercise;
