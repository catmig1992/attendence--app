import express from 'express';
import mongoose from 'mongoose';
import { CreateClassModel } from "../models/CreateClass";

const router = express.Router();

router.get("/", async(req,res) => {
    try{
        const response = await CreateClassModel.find({});
        res.json (response);
    } catch(err){
        res.json(err);
    }
});

router.post("/", async(req,res) => {
    const createclass = new CreateClassModel(req.body);
    try{
        const response = await createclass.save();
        res.json (response);
    } catch(err){
        res.json(err);
    }
});


export { router as createclassRouter};
