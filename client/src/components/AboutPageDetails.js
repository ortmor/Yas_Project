/* eslint-disable */
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/AboutPageDetails.css';
import axios from 'axios';
import { useSelector } from 'react-redux';

const AboutPageDetails = () => {
  const navigate = useNavigate();
  const [programNum, setProgramNum] = useState([]);
  const { user } = useSelector((state) => state);
  const userId = user && user.details ? user.details._id : null;
  const videoId = 'RJTjmvukv6s'; // Updated with the new video ID

  const handleAnswerTriviaClick = () => {
    navigate('/about-program');
  };

  return (
    <div className="aboutcontainer">
      <img
        src="/Ethara - Lockup_ADNOC_NEG.png"
        alt="Logo"
        className="abt-logo"
      />
     
      <p>
        Children aged 6-13 form their own mini <br />
        motorsport team, develop a team brand, <br />
        then apply this to various project elements <br />
        they produce including a scale model race <br />
        car, built from paper card. ‘Ethara’ is <br />
        Arabic for ‘Thrill’, the program aims to <br />
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
          <button className="tab-button" onClick={handleAnswerTriviaClick}>
           CONTINUE
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutPageDetails;
