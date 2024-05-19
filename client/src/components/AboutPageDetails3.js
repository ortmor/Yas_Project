/* eslint-disable */
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/AboutPageDetails3.scss";
import axios from "axios";
import { useSelector } from "react-redux";

function AboutPageDetails3() {
  const navigate = useNavigate();

  const videoId = "_Jw9TX8KS2Q"; // Updated with the new video ID

  const handleAnswerTriviaClick = () => {
    navigate("/about-program-3");
  };

  return (
    <div className="prothree_main">
      <div className="prothree_containermain">
        <div className="prothree_containerhead">
          <div className="prothree_container">
            <img
              src="/4x4iS - Lockup_NEG.png"
              alt="Logo"
              className="logothree"
            />
          </div>

          <div className="aboutthree_para">
            <p>
              Students aged 13-24 work in teams to engineer, build and code a
              remotely controlled mini four-wheel drive vehicle to successfully
              navigate obstacles on a special terrain track, just as demanding
              as a real off-road course. The program includes App. Development
              and A.I.
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

export default AboutPageDetails3;
