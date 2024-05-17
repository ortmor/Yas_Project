import mongoose from "mongoose";
import User from '../model/studentModel.js';

const { Schema } = mongoose;

const resultSchema = new Schema({
  userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  name: { type: String, required: true },
  correctAnswers: { type: Number, required: true },
  totalQuestions: { type: Number, required: true },
  programnum: { type: Number, required: true },
  firstAttemptCorrect: { type: Boolean, required: true },
  correctlyAnswered: { type: [Boolean], required: true },
  wronglyAnswered: { type: [Boolean], required: true },
  createdAt: { type: Date, default: Date.now },
});

const Result = mongoose.model("Result", resultSchema);

export default Result;
