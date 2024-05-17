import mongoose from "mongoose";

/** question model */
const questionSchema = new mongoose.Schema({
    questions: { type : Array, default: []}, 
    answers : { type : Array, default: []},
    program: { type: Array, default: [] },
    createdAt: { type: Date, default: Date.now },
});

const questionModel = mongoose.model("Question", questionSchema);

export default questionModel;