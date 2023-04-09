import mongoose from "mongoose";

const CreateClassSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },

  lastName: {
    type: String,
    required: true,
  },
});

export const CreateClassModel = mongoose.model(
  "createclass",
  CreateClassSchema
);
