import express from "express";
import {
  Logout,
  doSignup,
  dropQuestions,
  dropQuestionsfour,
  dropQuestionsthree,
  dropQuestionstwo,
  dropResult,
  getQuestions,
  getQuestionsfour,
  getQuestionsthree,
  getQuestionstwo,
  getResult,
  insertQuestions,
  insertQuestionsfour,
  insertQuestionsthree,
  insertQuestionstwo,
  login,
  storeResult,
  studentCheckAuth,
  getresult,
  getresultCount,
  getresultCountTwo,
  getresultCountThree,
  getresultCountFour
} from "../controllers/routerController.js";
import validate from "../middleware/validateBody.js";
import { loginSchema, signupSchema } from "../utils/yupSchema.js";
import { verifyStudent } from "../middleware/studentAuth.js";
// import { verifyStudentLogin } from "../middleware/studentAuth.js";

const router = express.Router();


router.post("/signup", validate(signupSchema), doSignup);
router.post("/login", validate(loginSchema), login).post('/logout', Logout);
router.get('/auth',studentCheckAuth)

// router.use(verifyStudent);

router
  .route("/questionsone")
  .get(getQuestions) // GET Request
  .post(insertQuestions) // POST Request
  .delete(dropQuestions); // DELETE Request
router
  .route("/questionstwo")
  .get(getQuestionstwo) // GET Request
  .post(insertQuestionstwo) // POST Request
  .delete(dropQuestionstwo); // DELETE Request
router
  .route("/questionsthree")
  .get(getQuestionsthree) // GET Request
  .post(insertQuestionsthree) // POST Request
  .delete(dropQuestionsthree); // DELETE Request
router
  .route("/questionsfour")
  .get(getQuestionsfour) // GET Request
  .post(insertQuestionsfour) // POST Request
  .delete(dropQuestionsfour); // DELETE Request
router.get("/resultUser/:userId",getresult);
router.get('/resultCount',getresultCount);
router.get('/resultCounttwo',getresultCountTwo);
router.get('/resultCountThree',getresultCountThree);
router.get('/resultCountFour',getresultCountFour);
router.route("/result").get(getResult).post(storeResult).delete(dropResult);

export default router;
