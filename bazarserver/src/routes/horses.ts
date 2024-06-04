import express from "express";

const router = express.Router();

import * as horsesController from "../controllers/horses";

router.get("/", horsesController.getAllHorses);

router.get("/:id", horsesController.getHorseById);

router.post("/", horsesController.postUpload);

router.put("/:id", horsesController.updateHorse);

router.delete("/:id", horsesController.deleteHorse);

module.exports = router;