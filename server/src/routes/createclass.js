import express from "express";
import mongoose from "mongoose";
import { CreateClassModel } from "../models/CreateClass.js";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const response = await CreateClassModel.find({});
    res.json(response);
  } catch (err) {
    res.json(err);
  }
});

//route to create a class --add student names
router.post("/portal", async (req, res) => {
  const createclass = new CreateClassModel(req.body);
  try {
    const response = await createclass.save();
    res.json(response);
  } catch (err) {
    res.json(err);
  }
});

//route for saving a class roster
router.put("/portal", async (req, res) => {});

export { router as createclassRouter };

////adding notes for a test pull to  seee if i still get an error
