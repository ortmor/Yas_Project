/* eslint-disable */
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/AboutPageDetails3.css";
import axios from "axios";
import { useSelector } from "react-redux";

function AboutPageDetails3() {
  const navigate = useNavigate();
 
  const videoId = "_Jw9TX8KS2Q"; // Updated with the new video ID



  const handleAnswerTriviaClick = () => {
    navigate("/about-program-3");
  };

  return (
    <div className="pro3-containermain">
      <div className="pro3-container">
        <img src="/4x4iS - Lockup_NEG.png" alt="Logo" className="logo3" />

        <p className="aboutpro_3">
          Students aged 13-24 work in teams to 
          engineer, build and code a remotely 
          controlled mini four-wheel drive vehicle to 
          successfully navigate obstacles on a 
          special terrain track, just as demanding as 
          a real off-road course. The program 
          includes App. Development and A.I.
          <br />
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
            <button className="tab-buttonthree" onClick={handleAnswerTriviaClick}>
              CONTINUE
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutPageDetails3;
