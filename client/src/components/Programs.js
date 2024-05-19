import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import "../styles/Programs.scss";

const Programs = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [activeProgram, setActiveProgram] = useState(null);
  const [programNums, setProgramNums] = useState([]);
  const [result, setResult] = useState(null);
  
  const { user } = useSelector((state) => state);
  const userId = user?.details?._id;

  useEffect(() => {
    axios
      .get(`/resultUser/${userId}`)
      .then((response) => {
        if (!response.data.error) {
          console.log("Response data:", response.data);  // Debugging: Log the response data
          setProgramNums(response.data.map(item => item.programnum));
          setResult(response.data[1]?.result);
        } else {
          console.error("Error fetching results:", response.data.error);
        }
      })
      .catch((error) => {
        console.error("Error fetching results:", error);
      });
  }, [userId]);

  const handleNextProgram = () => {
    if (activeProgram === 1) {
      navigate("/about-page-details");
    } else if (activeProgram === 2) {
      navigate("/about-page-details-2");
    } else if (activeProgram === 3) {
      navigate("/about-page-details-3");
    } else if (activeProgram === 4) {
      navigate("/about-page-details-4");
    }
  };

  const handleProgramSelection = (programNumber) => {
    setActiveProgram(programNumber);
  };

  const userData = user?.details?.email;
  const code = user?.details?.uniqueCode;
  const handleLogout = () => {
    const completedProgramsCount = programNums.filter(num => [1, 2, 3, 4].includes(num)).length;

    axios
      .post("/logout", {
        userData,
        completedProgramsCount,
        code,
      })
      .then((response) => {
        if (!response.data.err) {
          dispatch({ type: "refresh" });
          navigate("/thank-you");
        }
      });
  };

  return (
    <div className="programs_container">
      <div className="programs_containermain">
        <div className="programlogomain">
          <img src="/ADNOC YiS Lockup_NEG.png" alt="Logo" className="programlog_img" />
        </div>

        <div className="programmainsize">
          <div className="program_buttonsmain">
            <div
              className={`program_buttonchild ${programNums.includes(1) ? "green" : ""}`}
              onClick={() => handleProgramSelection(1)}
            >
              <img src="/Ethara - Lockup_ADNOC_NEG.png" alt="Program 1" />
            </div>

            <div
              className={`program_buttonchild ${programNums.includes(2) ? "green" : ""}`}
              onClick={() => handleProgramSelection(2)}
            >
              <img src="/F1_RM_in_Schools_Stk_White_Micro.png" alt="Program 2" />
            </div>
          </div>

          <div className="program_buttonsmain">
            <div
              className={`program_buttonchild ${programNums.includes(3) ? "green" : ""}`}
              onClick={() => handleProgramSelection(3)}
            >
              <img src="/4x4iS - Lockup_NEG.png" alt="Program 3" />
            </div>

            <div
              className={`program_buttonchild ${programNums.includes(4) ? "green" : ""}`}
              onClick={() => handleProgramSelection(4)}
            >
              <img src="/ADNOC YiS Lockup_NEG.png" alt="Program 4" />
            </div>
          </div>

          <div className="footermainbutton">
            <button onClick={handleNextProgram}>
              <h2> NEXT PROGRAM</h2>
            </button>
            <button onClick={handleLogout}>
              <h2> LOG OUT</h2>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Programs;
