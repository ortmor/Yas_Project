/* eslint-disable */
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/AboutPageDetails2.css';
import axios from 'axios';
import { useSelector } from 'react-redux';

function AboutPageDetails2() {
  const navigate = useNavigate();
  const [programNum, setProgramNum] = useState([]);
  const { user } = useSelector((state) => state);
  const userId = user && user.details ? user.details._id : null;
  const videoId = 'flR_sROmpJs'; // Updated with the new video ID

  useEffect(() => {
    axios
      .get(`/resultUser/${userId}`)
      .then((response) => {
        if (!response.data.error) {
          const programNumbers = response.data.map((data) => data.programnum);
          setProgramNum(programNumbers);
        } else {
          console.error('Error fetching results:', response.data.error);
        }
      })
      .catch((error) => {
        console.error('Error fetching results:', error);
      });
  }, [userId]);

  const handleAnswerTriviaClick = () => {
    navigate('/about-program-2');
  };

  return (
    <div className="pro2-container">
      <img
        src="/F1_RM_InSchools_Localised_UAE_Lockup01_Stk_White_Standard.png"
        alt="Logo"
        className="logo2"
      />
    
      <p>
        The official global F1 STEM education <br />
        program. Students aged 12-17 form <br />
        enterprise teams develop a brand and <br />
        manage the Design, Analyse, Make and <br />
        Test process to engineer and manufacture <br />
        their own mini F1 in Schools race cars <br />
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
          <button className="tab-button" onClick={handleAnswerTriviaClick}>
            CONTINUE
          </button>
        </div>
      </div>
    </div>
  );
}

export default AboutPageDetails2;
