import mongoose from "mongoose";

const resultPercentageSchema = new mongoose.Schema({
  code: { type: String, required: true },
  name: String,
  email: String,
  programnum: { type: Number, required: true },
  questionId: { type: Number, required: true },
  correctPercentage: { type: Number, required: true },
  wrongPercentage: { type: Number, required: true },
  totalAttempts: { type: Number, required: true },
  correctAttempts: { type: Number, required: true },
  wrongAttempts: { type: Number, required: true },
  usersAnsweredAllCorrectly:  [String] ,
  usersAnsweredAllWrong: [String],
});

// Create the model from the schema
const resultPercentageModel = mongoose.model(
  "resultPercentage",
  resultPercentageSchema
);

export default resultPercentageModel;
