import express from 'express';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import {UserModel} from '../models/AdminUsers.js';

const router = express.Router();

router.post("/register", async(req, res) => {
    const {username, password} = req.body;
    const user = await UserModel.findOne({username});

    if(user) {
        return res.status.json({message: "User already exists!"});
    }

    const hashedPassword = await bcrypt.hash(password, 10)

    const newUser = new UserModel({username, password: hashedPassword});
    await newUser.save();

    res.json({message: "User Registered"});
});

router.post("/login", async(req, res) => {
    const {username, password} = req.body;
    const user = await UserModel.findOne({username});

    if (!user) {
        return res.json({message: "User does not exist! Please Register."});
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
        return res.json ({message: "Username or Password is incorrect. Please try again."})
    }

    const token = jwt.sign({id:user._id}, "secret"); //create env for "secret"
    res.json ({token, userID: user._id})
});



export {router as userRouter};