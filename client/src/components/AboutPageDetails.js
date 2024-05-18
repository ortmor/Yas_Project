/* eslint-disable */
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/AboutPageDetails.css";
import axios from "axios";
import { useSelector } from "react-redux";

const AboutPageDetails = () => {
  const navigate = useNavigate();

  const videoId = "RJTjmvukv6s"; // Updated with the new video ID

  const handleAnswerTriviaClick = () => {
    navigate("/about-program");
  };

  return (
    <div className="aboutcontainermain">
      <div className="aboutcontainer">
        <img
          src="/Ethara - Lockup_ADNOC_NEG.png"
          alt="Logo"
          className="abt-logo"
        />

        <p className="aboutpara_1">
          Children aged 6-13 form their own mini 
          motorsport team, develop a team brand, 
          then apply this to various project elements 
          they produce including a scale model race 
          car, built from paper card. ‘Ethara’ is 
          Arabic for ‘Thrill’, the program aims to
          excite children about STEM learning.
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
            <button className="tab-buttonone" onClick={handleAnswerTriviaClick}>
              CONTINUE
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPageDetails;
