/* eslint-disable */
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/AboutPageDetails2.scss";
import axios from "axios";
import { useSelector } from "react-redux";

function AboutPageDetails2() {
  const navigate = useNavigate();

  const videoId = "flR_sROmpJs"; // Updated with the new video ID

  const handleAnswerTriviaClick = () => {
    navigate("/about-program-2");
  };

  return (
    <div className="protwo_main">
      <div className="protwo_containermain">
        <div className="protwo_containerhead">
        <div className="protwo_container">
          <img
            src="/F1_RM_InSchools_Localised_UAE_Lockup01_Stk_White_Standard.png"
            alt="Logo"
            className="logotwo"
          />
        </div>
        <div className="abouttwo_para">
        <p >
          The official global F1 STEM education program. Students aged 12-17
          form enterprise teams develop a brand and manage the Design, Analyse,
          Make and Test process to engineer and manufacture their own mini F1 in
          Schools race cars using industry standard tools.
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

export default AboutPageDetails2;
