/* eslint-disable */
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/AboutPageDetails3.css';
import axios from 'axios';
import { useSelector } from 'react-redux';

function AboutPageDetails3() {
  const navigate = useNavigate();
  const [programNum, setProgramNum] = useState([]);
  const { user } = useSelector((state) => state);
  const userId = user && user.details ? user.details._id : null;
  const videoId = '_Jw9TX8KS2Q'; // Updated with the new video ID

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
    navigate('/about-program-3');
  };

  return (
    <div className="pro3-container">
     <img
        src="/4x4iS - Lockup_NEG.png"
        alt="Logo"
        className="logo3"
      />
    
      <p>
      Students aged 13-24 work in teams to <br />
engineer, build and code a remotely <br />
controlled mini four-wheel drive vehicle to <br />
successfully navigate obstacles on a <br />
special terrain track, just as demanding as <br />
a real off-road course. The program <br />
includes App. Development and A.I.<br />
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

export default AboutPageDetails3;
