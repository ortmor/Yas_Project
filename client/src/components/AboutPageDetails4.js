/* eslint-disable */
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/AboutPageDetails4.scss";
import axios from "axios";
import { useSelector } from "react-redux";

function AboutPageDetails4() {
  const navigate = useNavigate();

  const videoId = "e9XcIwuzITQ"; // Updated with the new video ID



  const handleAnswerTriviaClick = () => {
    navigate("/about-program-4");
  };

  return (
    <div className="profour_main">
    <div className="profour_containermain">
      <div className="profour_containerhead">
      <div className="profour_container">
        <img src="/ADNOC YiS Lockup_NEG.png" alt="Logo" className="logofour" />
        </div>
        <h1>SCIENCE OF RACING!</h1>

        <div className="aboutfour_para">

        <p >
          Racing head-to-head on the 20-metre track 
          is the pinnacle of the Formula Ethara & F1 
          in Schools programs. To be fast, students 
          must gain an understanding of the related 
          science and math.
        </p>
        </div>

        {/* Video section */}
        <div className="post_video_container">
          <div className="video_wrapper">
            <iframe
              title="Video Player"
              width="560"
              height="315"
              src={`https://www.youtube.com/embed/${videoId}`}
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
          </div>
        <div className="tab_container">
            <button onClick={handleAnswerTriviaClick}>
              <h2>CONTINUE</h2>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutPageDetails4;
