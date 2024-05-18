/* eslint-disable */
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/AboutPageDetails2.css";
import axios from "axios";
import { useSelector } from "react-redux";

function AboutPageDetails2() {
  const navigate = useNavigate();

  const videoId = "flR_sROmpJs"; // Updated with the new video ID

  

  const handleAnswerTriviaClick = () => {
    navigate("/about-program-2");
  };

  return (
    <div className="pro2-containermain">
      <div className="pro2-container">
        <img
          src="/F1_RM_InSchools_Localised_UAE_Lockup01_Stk_White_Standard.png"
          alt="Logo"
          className="logo2"
        />

        <p className="aboutpro_2">
          The official global F1 STEM education 
          program. Students aged 12-17 form 
          enterprise teams develop a brand and 
          manage the Design, Analyse, Make and 
          Test process to engineer and manufacture 
          their own mini F1 in Schools race cars 
          using industry standard tools.
        </p>
        {/* Video section */}
        <div className="post-video-container">
          <div className="video-wrapper">
            <iframe
              title="Video Player"
              width="560"
              height="315"
              src={`https://www.youtube.com/embed/${videoId}`}
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
          <div className="tab-container">
            {/* <button className="tab-button" onClick={handleFullscreenClick}>
            Fullscreen
          </button> */}
            <button className="tab-buttontwo" onClick={handleAnswerTriviaClick}>
              CONTINUE
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutPageDetails2;
