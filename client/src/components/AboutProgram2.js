import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useSelector } from "react-redux";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../styles/AboutProgramtwo.scss";

const AboutProgram = () => {
  const { user } = useSelector((state) => state);
  const navigate = useNavigate();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [answer, setAnswer] = useState([]);
  const [questions, setQuestions] = useState([]);
  const [showAlert, setShowAlert] = useState(false);
  const [correctCount, setCorrectCount] = useState(0);
  const [firstAttemptCorrect, setFirstAttemptCorrect] = useState(true);
  const [correctlyAnswered, setCorrectlyAnswered] = useState([]);
  const [wronglyAnswered, setWronglyAnswered] = useState([]);

  const getQuestions = () => {
    axios
      .get("/questionstwo")
      .then((response) => {
        if (!response.data.err) {
          const fetchedQuestions = response.data[0].questions;
          setQuestions(fetchedQuestions);
          setAnswer(response.data[0].answers);
          setCorrectlyAnswered(Array(fetchedQuestions.length).fill(false));
          setWronglyAnswered(Array(fetchedQuestions.length).fill(false));
        } else {
          console.error("Error fetching questions:", response.data.err);
        }
      })
      .catch((error) => {
        console.error("Error fetching questions:", error);
      });
  };

  useEffect(() => {
    getQuestions();
  }, []);

  const handleAnswerSelect = (optionIndex) => {
    const correctAnswerIndex = answer[currentQuestionIndex];
    const isCorrect = optionIndex === correctAnswerIndex;

    const incorrectOptions = questions[currentQuestionIndex].options
      .map((_, index) => index)
      .filter((index) => index !== correctAnswerIndex);

    if (isCorrect) {
      if (!correctlyAnswered[currentQuestionIndex]) {
        setCorrectCount((prevCount) => prevCount + 1);
        setCorrectlyAnswered((prev) => {
          const newArr = [...prev];
          newArr[currentQuestionIndex] = true;
          return newArr;
        });
      }
      setSelectedAnswer({
        correct: correctAnswerIndex,
        selected: optionIndex,
        incorrect: incorrectOptions,
      });
    } else {
      setSelectedAnswer({
        correct: correctAnswerIndex,
        selected: optionIndex,
        incorrect: incorrectOptions,
      });
      setWronglyAnswered((prev) => {
        const newArr = [...prev];
        newArr[currentQuestionIndex] = true;
        return newArr;
      });
      setFirstAttemptCorrect(false);
    }
  };

  const handleNextQuestion = () => {
    if (selectedAnswer !== "") {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedAnswer("");
      setShowAlert(false);
    } else {
      setShowAlert(true);
    }
  };
  const code = user?.details?.uniqueCode;

  const handleFinishProgram = () => {
    handleResult();
  };

  const handleResult = () => {
    const resultData = {
      userId: user.details._id,
      code: code,
      name: user.details.name,
      email: user.details.email,
      correctAnswers: correctCount,
      totalQuestions: questions.length,
      firstAttemptCorrect: firstAttemptCorrect,
      programnum: 2,
      correctlyAnswered,
      wronglyAnswered,
    };
    axios
      .post("/result", resultData)
      .then((response) => {
        console.log(response.data.msg);
        navigate("/programs");
      })
      .catch((error) => {
        console.error("Error saving result:", error);
      });
  };

  if (questions.length === 0) {
    return <div>Loading...</div>;
  }

  const currentQuestion = questions[currentQuestionIndex];

  return (
    <div className="programtwo_containermain">
      <div className="programtwo-containertwo">
        <div className="programtwo_logo">
          <img
            src="/F1_RM_InSchools_Localised_UAE_Lockup01_Stk_White_Standard.png"
            alt="Logo"
            className="programtwo_img"
          />
        </div>
        <div className="programtwo_heading">
          <h3>TRIVIA TIME</h3>
          <h4>
            Question {currentQuestionIndex + 1}/{questions.length}
          </h4>
          <p>{currentQuestion.questiontwo}</p>
        </div>

        <div className="programtwo_options">
          <div className="programtwooptions_container">
            {" "}
            {currentQuestion.options.map((option, index) => {
              const isOptionSelected = selectedAnswer.selected === index;
              const isCorrect = selectedAnswer.correct === index;
              const isIncorrect =
                selectedAnswer.incorrect &&
                selectedAnswer.incorrect.includes(index);
              const optionClass = isCorrect
                ? "correct"
                : isIncorrect
                ? "incorrect"
                : "";

              return (
                <div
                  key={index}
                  className={`programtwo_answer ${
                    isOptionSelected ? "selected" : ""
                  } ${optionClass}`}
                  onClick={() => handleAnswerSelect(index)}
                >
                  {option}
                </div>
              );
            })}
          </div>
          {showAlert && (
            <></>
            // <div >Please select an answer!</div>
          )}
          <div className="programtwo_footer">
            {currentQuestionIndex < questions.length - 1 && (
              <button onClick={handleNextQuestion}>
                <h2> NEXT QUESTION</h2>
              </button>
            )}
            {currentQuestionIndex === questions.length - 1 && (
              <button onClick={handleFinishProgram}>
                <h2>SUBMIT</h2>
              </button>
            )}
          </div>

          <ToastContainer />
        </div>
      </div>
    </div>
  );
};

export default AboutProgram;
