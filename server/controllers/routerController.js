import questionModel from "../model/questionModel.js";
import studentModel from "../model/studentModel.js";
import questions, { answers } from "../config/dataOne.js";
import questionstwo, { answerstwo } from "../config/dataTwo.js";
import questionsthree, { answersthree } from "../config/dataThree.js";
import questionsfour, { answersfour } from "../config/dataFour.js";
import resultModel from "../model/resultModel.js";
import jwt from "jsonwebtoken";
import { sendEmail } from "../middleware/sendMail.js";
import resultPercentageSchema from "../model/resultPercentage.js";

const student_secret_key = process.env.JWT_SECRET_KEY_STUDENT;
const maxAge = 3 * 24 * 60 * 60;

// create a jwt token
const createToken = (id) => {
  return jwt.sign({ id }, student_secret_key, {
    expiresIn: maxAge,
  });
};

function generateUniqueCode() {
  const randomNumber = Math.floor(100 + Math.random() * 900);
  return randomNumber.toString();
}

// signup
export async function doSignup(req, res) {
  try {
    const { name, email } = req.body;
    const emailExist = await studentModel.findOne({ email });
    if (emailExist) {
      return res
        .status(400)
        .json({ success: false, message: "This email is already registered." });
    } else {
      if (!name || !email) {
        throw new Error("All fields are mandatory");
      }
      const uniqueCode = generateUniqueCode();
      const student = await studentModel.create({
        name,
        email,
        uniqueCode,
      });
      const token = createToken(student._id);
      res.cookie("student jwt", token, {
        withCredentials: true,
        httpOnly: false,
        maxAge: maxAge * 1000,
        secure:true,
        sameSite: "none",
      });
      res
        .status(200)
        .json({ status: true, message: "Registration successful" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ status: false, message: "Internal Server Error" });
  }
}

export async function login(req, res) {
  try {
    const { email } = req.body;
    console.log(email,"emailll");
    
    if (!email) {
      return res
        .status(400)
        .json({ login: false, message: "All fields are required" });
    }

    const student = await studentModel.findOne({ email });
    if (student) {
      if (!student.status) {
        return res.json({ login: false, message: "Sorry, you are banned" });
      }

      // Creating Token With user id
      const token = createToken(student._id);
      res.cookie("student jwt", token, {
        withCredentials: true,
        httpOnly: false,
        maxAge: maxAge * 1000,
        secure:true,
        sameSite: "none",
      });
      res
        .status(200)
        .json({ student, token, login: true, message: "Login successfully " });
    } else {
      res.json({ login: false, message: "Incorrect student name or password" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ login: false, message: "Internal Server Error" });
  }
}

//Logout

export const Logout = (req, res) => {
  const { userData, completedProgramsCount, code } = req.body;

  // if (completedProgramsCount === 3 || completedProgramsCount === 4) {
  //   sendEmail(userData, completedProgramsCount, code)
  //     .then((response) => {
  //       console.log(response);
  //     })
  //     .catch((error) => {
  //       console.error(error);
  //     });
  // }

  res
    .clearCookie("student jwt")
    .clearCookie(" ")
    .json({ err: false, message: "Logged out successfully" });
};

// console.log(req.body,"))))))))))))))))");
// return res
// .cookie('student jwt', '', {
//   httpOnly: true,
//   secure: true,
//   maxAge: 1000 * 60 * 60 * 24 * 7,
//   sameSite: 'none',
// })
// .cookie('signupToken', '', {
//   httpOnly: true,
//   secure: true,
//   maxAge: 1000 * 60 * 60 * 24 * 7,
//   sameSite: 'none',
// })
// .json({ err: false, message: 'Logged out successfully' });

export const studentCheckAuth = async (req, res) => {
  const token = req.cookies["student jwt"];
  if (token) {
    const verifyJwt = jwt.verify(token, process.env.JWT_SECRET_KEY_STUDENT);
    let studentID = verifyJwt.id;
    const student = await studentModel.findOne({ _id: studentID });
    if (student?.ban == true) {
      res.json({
        logged: false,
        err: true,
        message: "student banned",
        ban: true,
      });
    } else {
      res.json({ logged: true, details: student, ban: false });
    }
  } else {
    res.json({ logged: false, err: true, message: "No token", ban: false });
  }
};

/** get all questions */
export async function getQuestions(req, res) {
  try {
    const q = await questionModel.find({ program: 1 });
    res.json(q);
  } catch (error) {
    res.json({ error });
  }
}

/** insert all questinos */
export async function insertQuestions(req, res) {
  console.log("haiiii");
  try {
    const data = await questionModel.insertMany({
      questions: questions,
      answers: answers,
      program: 1,
    });
    res.json({ msg: "Data Saved Successfully...!" });
  } catch (error) {
    res.json({ error });
  }
}

/** Delete all Questions */
export async function dropQuestions(req, res) {
  try {
    await questionModel.deleteMany({ program: 1 });
    res.json({ msg: "Questions Deleted Successfully...!" });
  } catch (error) {
    res.json({ error });
  }
}

/** get all questions */
export async function getQuestionstwo(req, res) {
  try {
    const q = await questionModel.find({ program: 2 });
    res.json(q);
  } catch (error) {
    res.json({ error });
  }
}

/** insert all questinos */
export async function insertQuestionstwo(req, res) {
  try {
    const data = await questionModel.insertMany({
      questions: questionstwo,
      answers: answerstwo,
      program: 2,
    });
    res.json({ msg: "Data Saved Successfully...!" });
  } catch (error) {
    res.json({ error });
  }
}

/** Delete all Questions */
export async function dropQuestionstwo(req, res) {
  try {
    await questionModel.deleteMany({ program: 2 });
    res.json({ msg: "Questions Deleted Successfully...!" });
  } catch (error) {
    res.json({ error });
  }
}

export async function getQuestionsthree(req, res) {
  try {
    const q = await questionModel.find({ program: 3 });
    res.json(q);
  } catch (error) {
    res.json({ error });
  }
}

/** insert all questinos */
export async function insertQuestionsthree(req, res) {
  try {
    console.log(questionstwo);
    const data = await questionModel.insertMany({
      questions: questionsthree,
      answers: answersthree,
      program: 3,
    });
    res.json({ msg: "Data Saved Successfully...!" });
  } catch (error) {
    res.json({ error });
  }
}

/** Delete all Questions */
export async function dropQuestionsthree(req, res) {
  try {
    await questionModel.deleteMany({ program: 3 });
    res.json({ msg: "Questions Deleted Successfully...!" });
  } catch (error) {
    res.json({ error });
  }
}

export async function getQuestionsfour(req, res) {
  try {
    const q = await questionModel.find({ program: 4 });
    res.json(q);
  } catch (error) {
    res.json({ error });
  }
}

/** insert all questinos */
export async function insertQuestionsfour(req, res) {
  try {
    console.log(questionstwo);
    const data = await questionModel.insertMany({
      questions: questionsfour,
      answers: answersfour,
      program: 4,
    });
    res.json({ msg: "Data Saved Successfully...!" });
  } catch (error) {
    res.json({ error });
  }
}

/** Delete all Questions */
export async function dropQuestionsfour(req, res) {
  try {
    await questionModel.deleteMany({ program: 4 });
    res.json({ msg: "Questions Deleted Successfully...!" });
  } catch (error) {
    res.json({ error });
  }
}

export async function getresult(req, res) {
  try {
    const userId = req.params.userId;
    const results = await resultModel.find({ userId: userId });
    res.json(results);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

export async function getresultCount(req, res) {
  try {
    const results = await resultModel.find({ programnum: 1 });

    let correctCount = 0;
    let incorrectCount = 0;

    results.forEach((result) => {
      if (result.correctAnswers >= result.totalQuestions / 2) {
        correctCount++;
      } else {
        incorrectCount++;
      }
    });
    const totalCount = correctCount + incorrectCount;

    const correctPercentage = (correctCount / totalCount) * 100;
    const incorrectPercentage = (incorrectCount / totalCount) * 100;

    res.json({ correctPercentage, incorrectPercentage });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

export async function getresultCountTwo(req, res) {
  try {
    const results = await resultModel.find({ programnum: 2 });

    let correctCount = 0;
    let incorrectCount = 0;

    results.forEach((result) => {
      if (result.correctAnswers >= result.totalQuestions / 2) {
        correctCount++;
      } else {
        incorrectCount++;
      }
    });
    const totalCount = correctCount + incorrectCount;

    const correctPercentage = (correctCount / totalCount) * 100;
    const incorrectPercentage = (incorrectCount / totalCount) * 100;

    res.json({ correctPercentage, incorrectPercentage });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

export async function getresultCountThree(req, res) {
  try {
    const results = await resultModel.find({ programnum: 3 });

    let correctCount = 0;
    let incorrectCount = 0;

    results.forEach((result) => {
      if (result.correctAnswers >= result.totalQuestions / 2) {
        correctCount++;
      } else {
        incorrectCount++;
      }
    });
    const totalCount = correctCount + incorrectCount;

    const correctPercentage = (correctCount / totalCount) * 100;
    const incorrectPercentage = (incorrectCount / totalCount) * 100;

    res.json({ correctPercentage, incorrectPercentage });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

export async function getresultCountFour(req, res) {
  try {
    const results = await resultModel.find({ programnum: 4 });

    let correctCount = 0;
    let incorrectCount = 0;

    results.forEach((result) => {
      if (result.correctAnswers >= result.totalQuestions / 2) {
        correctCount++;
      } else {
        incorrectCount++;
      }
    });
    const totalCount = correctCount + incorrectCount;

    const correctPercentage = (correctCount / totalCount) * 100;
    const incorrectPercentage = (incorrectCount / totalCount) * 100;

    res.json({ correctPercentage, incorrectPercentage });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

export async function getResult(req, res) {
  try {
    const r = await resultModel.find();
    res.json(r);
  } catch (error) {
    res.json({ error });
  }
}

// export async function storeResult(req, res) {
//   try {
//     const {
//       name,
//       userId,
//       correctAnswers,
//       totalQuestions,
//       programnum,
//       firstAttemptCorrect,
//       correctlyAnswered,
//       wronglyAnswered
//     } = req.body;
//     let existingResult = await resultModel.findOne({ userId, programnum });

//     if (existingResult) {
//       await resultModel.findOneAndUpdate({ userId, programnum }, { $set: { name, userId, correctAnswers, totalQuestions,  programnum, firstAttemptCorrect, correctlyAnswered, wronglyAnswered } });
//       res.json({ msg: "Result updated successfully." });
//     } else {
//       const resultData = {
//         name,
//         userId,
//         correctAnswers,
//         totalQuestions,
//         programnum,
//         firstAttemptCorrect,
//         correctlyAnswered,
//         wronglyAnswered
//       };
//       const newResult = await resultModel.create(resultData);
//       res.json({ msg: "Result saved successfully.", data: newResult });
//     }

//   } catch (error) {
//     console.error("Error saving result:", error);
//     res.status(500).json({ error: "Error saving result." });
//   }
// }

// export async function storeResult(req, res) {
//   try {
//     const {
//       name,
//       code,
//       userId,
//       email,
//       correctAnswers,
//       totalQuestions,
//       programnum,
//       firstAttemptCorrect,
//       correctlyAnswered,
//       wronglyAnswered,
//     } = req.body;

//     let existingResult = await resultModel.findOne({ userId, programnum });

//     if (existingResult) {
//       await resultModel.findOneAndUpdate(
//         { userId, programnum },
//         {
//           $set: {
//             name,
//             userId,
//             correctAnswers,
//             totalQuestions,
//             programnum,
//             firstAttemptCorrect,
//             correctlyAnswered,
//             wronglyAnswered,
//           },
//         }
//       );
//       res.json({ msg: "Result updated successfully." });
//     } else {
//       const resultData = {
//         name,
//         userId,
//         correctAnswers,
//         totalQuestions,
//         programnum,
//         firstAttemptCorrect,
//         correctlyAnswered,
//         wronglyAnswered,
//       };
//       const newResult = await resultModel.create(resultData);
//       res.json({ msg: "Result saved successfully.", data: newResult });
//     }

//     // Retrieve all results for the user and program
//     const allResults = await resultModel.find({ userId, programnum });

//     const triviaQuestions = {};
//     const peopleWhoAnsweredAllCorrectly = new Set();
//     const peopleWhoAnsweredAllWrong = new Set();
//     allResults.forEach((result) => {
//       if (!triviaQuestions[result.questionId]) {
//         triviaQuestions[result.questionId] = {
//           totalAttempts: 0,
//           correctFirstAttempt: 0,
//           mistakeFirstAttempt: 0,
//         };
//       }

//       // Increment total attempts for the question
//       triviaQuestions[result.questionId].totalAttempts++;

//       if (result.firstAttemptCorrect) {
//         triviaQuestions[result.questionId].correctFirstAttempt++;
//       } else {
//         triviaQuestions[result.questionId].mistakeFirstAttempt++;
//       }

//       // Check if the user has answered all questions correctly
//       if (result.correctAnswers === result.totalQuestions) {
//         peopleWhoAnsweredAllCorrectly.add(result.userId);
//       }
//       if(result.totalQuestions-result.correctAnswers){
//         peopleWhoAnsweredAllWrong.add(result.userId);
//       }
//     });

//     // Convert set of users who answered all correctly to an array
//     const usersWhoAnsweredAllCorrectly = [...peopleWhoAnsweredAllCorrectly];
//      const usersWhoAnsweredAllWrong =[...peopleWhoAnsweredAllWrong]
//     // Calculate percentages and save data to PercentageModel
//     await Promise.all(
//       Object.keys(triviaQuestions).map(async (questionId) => {
//         const question = triviaQuestions[questionId];
//         console.log(question, "question");
//         const totalAttempts = question.totalAttempts;
//         const correctFirstAttempt = question.correctFirstAttempt;
//         const mistakeFirstAttempt = question.mistakeFirstAttempt;

//         // Calculate correct and wrong percentages
//         const correctPercentage = (correctFirstAttempt / totalAttempts) * 100;
//         const mistakePercentage = (mistakeFirstAttempt / totalAttempts) * 100;
//         console.log(correctPercentage,"correctPercentage,",mistakePercentage,"mistakePercentage");
//         const uniqueCodes = await Promise.all(
//           usersWhoAnsweredAllCorrectly.map(async (userId) => {
//             console.log(userId, "userId");
//             const user = await studentModel.findOne({ _id: userId });
//             console.log(user, "user");
//             return user ? user.uniqueCode : null;
//           })
//         );
//         const uniqueCodesWrong = await Promise.all(
//           usersWhoAnsweredAllWrong.map(async (userId) => {
//             console.log(userId, "userId");
//             const user = await studentModel.findOne({ _id: userId });
//             console.log(user, "user");
//             return user ? user.uniqueCode : null;
//           })
//         );
//         // Convert array of objects to a string
//         const usersWhoAnsweredAllCorrectlyString = JSON.stringify(uniqueCodes);
//         const usersWhoAnsweredAllWrongString = JSON.stringify(uniqueCodesWrong);
//         console.log(
//           usersWhoAnsweredAllWrongString,
//           "usersWhoAnsweredAllWrongString"
//         );
//         let existingProgram = await PercentageModel.findOne({
//           userId,
//           programnum,
//         });

//         if (existingProgram) {
//           // If program exists, update attempt count and other details
//           await PercentageModel.findOneAndUpdate(
//             { userId, programnum },
//             {
//               $inc: { totalAttempts: 1 },
//               $set: {
//                 name,
//                 code,
//                 programnum,
//                 email,
//                 correctPercentage,
//                 mistakePercentage,
//                 correctFirstAttempt,
//                 mistakeFirstAttempt,
//                 usersAnsweredAllCorrectly: usersWhoAnsweredAllCorrectlyString,
//                 usersAnsweredAllWrong:usersWhoAnsweredAllWrongString,
//               },
//             }
//           );
//         } else {
//           // If program doesn't exist, create a new entry
//           await PercentageModel.create({
//             name,
//             code,
//             programnum,
//             email,
//             correctPercentage,
//             mistakePercentage,
//             totalAttempts,
//             correctFirstAttempt,
//             mistakeFirstAttempt,
//             usersAnsweredAllCorrectly: usersWhoAnsweredAllCorrectlyString,
//             usersAnsweredAllWrong:usersWhoAnsweredAllWrongString,

//           });
//         }
//       })
//     );

//   } catch (error) {
//     console.error("Error saving result:", error);
//     res.status(500).json({ error: "Error saving result." });
//   }
// }


export async function storeResult(req, res) {
  try {
    const {
      name,
      code,
      userId,
      email,
      correctAnswers,
      totalQuestions,
      programnum,
      firstAttemptCorrect,
      correctlyAnswered,
      wronglyAnswered,
    } = req.body;

    let resultCode = code || uuidv4(); // Generate a unique code if not provided

    let existingResult = await resultModel.findOne({ userId, programnum });
    console.log(req.body, "+++++++++++++");

    if (existingResult) {
      await resultModel.findOneAndUpdate(
        { userId, programnum },
        {
          $set: {
            name,
            correctAnswers,
            totalQuestions,
            firstAttemptCorrect,
            correctlyAnswered,
            wronglyAnswered,
          },
        }
      );
      res.json({ msg: "Result updated successfully." });
    } else {
      const resultData = {
        userId,
        name,
        correctAnswers,
        totalQuestions,
        programnum,
        firstAttemptCorrect,
        correctlyAnswered,
        wronglyAnswered,
      };
      const newResult = await resultModel.create(resultData);
      res.json({ msg: "Result saved successfully.", data: newResult });
    }

    // Retrieve all results for the program
    const allResults = await resultModel.find({ programnum });
    console.log(allResults, "))))))))))))))");
    const questionStats = {};
    const peopleWhoAnsweredAllCorrectly = new Set();
    const peopleWhoAnsweredAllWrong = new Set();

    allResults.forEach((result) => {
      result.correctlyAnswered.forEach((answeredCorrectly, index) => {
        if (!questionStats[index]) {
          questionStats[index] = {
            totalAttempts: 0,
            correctAttempts: 0,
            wrongAttempts: 0,
          };
        }
        questionStats[index].totalAttempts++;
        if (answeredCorrectly) {
          questionStats[index].correctAttempts++;
        }
      });

      result.wronglyAnswered.forEach((answeredWrongly, index) => {
        if (!questionStats[index]) {
          questionStats[index] = {
            totalAttempts: 0,
            correctAttempts: 0,
            wrongAttempts: 0,
          };
        }
        if (answeredWrongly) {
          questionStats[index].wrongAttempts++;
        }
      });

      if (
        result.correctAnswers === result.totalQuestions &&
        result.firstAttemptCorrect
      ) {
        peopleWhoAnsweredAllCorrectly.add(result.userId);
      } else if (
        result.wronglyAnswered.every((answeredWrongly) => answeredWrongly) &&
        !result.firstAttemptCorrect
      ) {
        peopleWhoAnsweredAllWrong.add(result.userId);
      }
    });

    await Promise.all(
      Object.keys(questionStats).map(async (questionId) => {
        const stats = questionStats[questionId];
        const totalAttempts = stats.totalAttempts;
        const correctAttempts = stats.correctAttempts;
        const wrongAttempts = stats.wrongAttempts;

        const correctPercentage = (correctAttempts / totalAttempts) * 100;
        const wrongPercentage = (wrongAttempts / totalAttempts) * 100;

        const usersAnsweredAllCorrectly = await Promise.all(
          [...peopleWhoAnsweredAllCorrectly].map(async (userId) => {
            const user = await studentModel.findById(userId);
            return user ? user.uniqueCode : null;
          })
        );

        const usersAnsweredAllWrong = await Promise.all(
          [...peopleWhoAnsweredAllWrong].map(async (userId) => {
            const user = await studentModel.findById(userId);
            return user ? user.uniqueCode : null;
          })
        );

        let updateData = {
          name,
          code: resultCode,
          email,
          programnum,
          questionId, 
          correctPercentage,
          wrongPercentage,
          totalAttempts,
          correctAttempts,
          wrongAttempts,
          usersAnsweredAllCorrectly,
          usersAnsweredAllWrong,
        };
        console.log(updateData, "updateData");
        let existingPercentage = await resultPercentageSchema.findOne({
          name,
    email,
    programnum,
    questionId
        });
        console.log(existingPercentage,"existingPercentage");
        if (existingPercentage) {
          await resultPercentageSchema.updateOne(
            { name, email, programnum, questionId },
            { $set: updateData }
          );
        } else {
          await resultPercentageSchema.create(updateData);
        }
      })
    );
  } catch (error) {
    console.error("Error saving result:", error);
    if (!res.headersSent) {
      res.status(500).json({ error: "Error saving result." });
    }
  }
}
/** delete all result */
export async function dropResult(req, res) {
  try {
    await resultModel.deleteMany();
    res.json({ msg: "Result Deleted Successfully...!" });
  } catch (error) {
    res.json({ error });
  }
}
