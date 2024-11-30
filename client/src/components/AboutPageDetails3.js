/* eslint-disable */
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/AboutPageDetails3.scss";
import axios from "axios";
import { useSelector } from "react-redux";

function AboutPageDetails3() {
  const navigate = useNavigate();
  const [showPopup, setShowPopup] = useState(true); // Show popup immediately
  const [popupContent, setPopupContent] = useState("");
  const videoId = "_Jw9TX8KS2Q"; // Updated with the new video ID
  useEffect(() => {
    setPopupContent(`
       <h2>The Terrain Challenge </h2>
            <p>The terrain challenge is one of the key parts of the 4x4 in Schools program, it challenges students to navigate successfully around the course using the vehicle they design and manufacture at school. Students integrate electronics and develop code to enhance the performance of the vehicle as well as make improvements to the mechanical components such as the suspension and wheels.</p>
          <p>You can have a go at navigating a 4x4 vehicle around the terrain challenge, just ask one of our staff!!</p>
            `);
  }, []);
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

export default AboutPageDetails3;
