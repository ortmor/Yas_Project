/* eslint-disable */
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/AboutPageDetails.scss";
import "../styles/WelcomePage.scss";
import axios from "axios";
import { useSelector } from "react-redux";

const AboutPageDetails = () => {
  const navigate = useNavigate();
  const [showPopup, setShowPopup] = useState(true); // Show popup immediately
  const [popupContent, setPopupContent] = useState("");
  const videoId = "RJTjmvukv6s";
  useEffect(() => {
    setPopupContent(`
     <h2>Welcome to the ADNOC Yas in Schools Experience Centre.</h2>
            <p>This dedicated education facility at Yas Marina Circuit is used year-round for school visits, holiday camps, teacher training workshops, and program R&D.</p>
            <p>This facility opened in 2023 and is the first of its kind in the world, giving students in the UAE a unique learning experience trackside at Yas Marina Circuit.</p>
    `);
  }, []);
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
};

export default AboutPageDetails;
