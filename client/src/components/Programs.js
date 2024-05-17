/* eslint-disable */

import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import "../styles/Programs.css";

const Programs = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [activeProgram, setActiveProgram] = useState(null);
  const [programNums, setProgramNums] = useState([]);
  const [result, setResult] = useState(null);

  const programImages = [
    { programNum: 1, imagePath: "/Ethara - Lockup_ADNOC_NEG.png" },
    { programNum: 2, imagePath: "/F1_RM_in_Schools_Stk_White_Micro.png" },
    { programNum: 3, imagePath: "/4x4iS - Lockup_NEG.png" },
    { programNum: 4, imagePath: "/ADNOC YiS Lockup_NEG.png" }
  ];

  const handleNextProgram = () => {
    navigate('/qr-scanner'); // Navigate to the QR scanner page
  };
  const handleProgramSelection = (programNumber) => {
    setActiveProgram(programNumber);
  };

  const { user } = useSelector((state) => state);
  const userId = user?.details?._id;

console.log(user,"userpro");
  useEffect(() => {
    console.log(userId,user.details,"_____________________");
    if(!userId)return
    
    axios
      .get(`/resultUser/${userId}`)
      .then((response) => {
        console.log(response.data, "response");
        if (!response.data.error) {
          const programNumbers = response.data.map(item => item.programnum);
          setProgramNums(programNumbers);
          setResult(response.data[1]?.result || null);
        } else {
          console.error("Error fetching results:", response.data.error);
        }
      })
      .catch((error) => {
        console.error("Error fetching results:", error);
      });

  }, [userId]);

  const userData = user?.details?.email;
  const code = user?.details?.uniqueCode;

   const handleLogout = () => {
   

    axios.post("/logout", { userData, completedProgramsCount: programNums, code })
    .then((response) => {
      if (!response.data.err) {
        // Clear cookies
        clearCookies();
        
        dispatch({ type: "refresh" });
        navigate("/thank-you");
      }
    });
  
  function clearCookies() {
    const cookies = document.cookie.split("; ");
    for (const cookie of cookies) {
      const eqPos = cookie.indexOf("=");
      const name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
      document.cookie = `${name}=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/`;
    }
  }
  
   }
  return (
    <div className="programs-containermain">
      <div className="programs-container">
        <img
          src="/ADNOC YiS Lockup_NEG.png"
          alt="Logo"
          className="programs-logo"
        />
        <div className="program-buttons">
          {programImages.map((program, index) => (
            <button
              key={index}
              className={`program-button ${programNums.includes(program.programNum) ? "green" : ""}`}
              onClick={() => handleProgramSelection(program.programNum)}
            >
              <img
                src={program.imagePath}
                alt={`Program ${program.programNum}`}
                className="program-image"
              />
            </button>
          ))}
        </div>

        <div className="additional-buttons">
          <button className="extra-button" onClick={handleNextProgram}>
            <h3>NEXT PROGRAM</h3>
          </button>
          <button className="extra-button1" onClick={handleLogout}>
            <h3>LOG OUT</h3>
          </button>
        </div>
      </div>
      <div className="space"></div>
    </div>
  );
};

export default Programs;


