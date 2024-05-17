import mongoose from "mongoose";

const studentSchema = new mongoose.Schema(
  {
    name:{
      type:String,
      required: [true, "Student name is required"],
    },
    email: {
      type: String,
      required: [true, "Student email is required"],
    },
    uniqueCode: {
      type: String,
      unique: true, 
    },
    login: {
      type: Boolean,
      default: false,
    },
    status: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  }
);

const studentModel = mongoose.model("Student", studentSchema);

export default studentModel;
