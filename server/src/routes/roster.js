import express from "express";
import mongoose from "mongoose";
import { RosterModel } from "../models/Roster.js";
import { UserModel } from "../models/AdminUsers.js";
import { verifyToken } from "./adminusers.js";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const response = await RosterModel.find({});
    res.json(response);
  } catch (err) {
    res.json(err);
  }
});

//route to create a student profile
//verify token to make sure registered users have access
router.post("/", verifyToken, async (req, res) => {
  const roster = new RosterModel(req.body); //requesting entire body of model
  try {
    const response = await roster.save();
    res.json(response);
  } catch (err) {
    res.json(err);
  }
});



export { router as rosterRouter };
