import express from "express";

const router = express.Router();

import * as usersController from "../controllers/users";

router.get("/", usersController.getAllUsers);

router.get("/:id", usersController.getUserById);

router.post("/", usersController.createUser);

router.put("/:id", usersController.updateUser);

router.delete("/:id", usersController.deleteUser);

module.exports = router;