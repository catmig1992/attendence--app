import express from 'express'; //make sure to add  "type": "module" in package json for this notation
import cors from 'cors';
import mongoose from 'mongoose';


const app = express();

app.use(express.json()); //to get data from frontend
app.use(cors());



//mongoose.connect(
//"")

app.listen(3001,() => console.log("SERVER STARTED ON PORT 3001!!"));