/* eslint-disable */
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/AboutPageDetails.scss";
import axios from "axios";
import { useSelector } from "react-redux";

const AboutPageDetails = () => {
  const navigate = useNavigate();

  const videoId = "RJTjmvukv6s";

  const handleAnswerTriviaClick = () => {
    navigate("/about-program");
  };

  return (
    <div className="aboutcontainer_onemain">
      <div className="aboutcontainerone_second">
        <div className="aboutcontainer">
          <div className="abt_logocontainer">
            <img
              src="/Ethara - Lockup_ADNOC_NEG.png"
              alt="Logo"
              className="abt_logo"
            />
          </div>
          <div className="aboutpara_container">
            <p className="aboutpara_1">
              Children aged 6-13 form their own mini motorsport team, develop a
              team brand, then apply this to various project elements they
              produce including a scale model race car, built from paper card.
              ‘Ethara’ is Arabic for ‘Thrill’, the program aims to excite
              children about STEM learning.
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
      <div className="space_one">

      </div>
    </div>
  );
};

export default AboutPageDetails;
