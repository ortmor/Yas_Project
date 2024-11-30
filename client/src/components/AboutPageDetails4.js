/* eslint-disable */
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/AboutPageDetails4.scss";
import axios from "axios";
import { useSelector } from "react-redux";

function AboutPageDetails4() {
  const navigate = useNavigate();
  const [showPopup, setShowPopup] = useState(true); // Show popup immediately
  const [popupContent, setPopupContent] = useState("");
  const videoId = "e9XcIwuzITQ"; // Updated with the new video ID
  useEffect(() => {
    setPopupContent(`
      <h2>Race Zone</h2>
            <p>You are now in the Race Zone which houses our 25m racetrack used for Formula Ethara and F1 in Schools. This space is mostly used for Formula Ethara race days where schools bring the Formula Ethara cars they have made in school and race them to find out who has the fastest car.</p>
         <p>You can have a go at racing yourself today, just ask one of our staff!</p>
            `);
  }, []);


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
      {showPopup && (
        <div className="popup">
          <div className="popup-content">
            <button
              className="close-button"
              onClick={() => setShowPopup(false)}
            >
              &times;
            </button>
            <div dangerouslySetInnerHTML={{ __html: popupContent }}></div>
          </div>
        </div>
      )}
    </div>
  );
}

export default AboutPageDetails4;
