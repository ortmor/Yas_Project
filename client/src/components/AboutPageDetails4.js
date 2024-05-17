/* eslint-disable */
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/AboutPageDetails4.css";
import axios from "axios";
import { useSelector } from "react-redux";

function AboutPageDetails4() {
  const navigate = useNavigate();
  const [programNum, setProgramNum] = useState([]);
  const { user } = useSelector((state) => state);
  const userId = user && user.details ? user.details._id : null;
  const videoId = "e9XcIwuzITQ"; // Updated with the new video ID

  useEffect(() => {
    axios
      .get(`/resultUser/${userId}`)
      .then((response) => {
        if (!response.data.error) {
          const programNumbers = response.data.map((data) => data.programnum);
          setProgramNum(programNumbers);
        } else {
          console.error("Error fetching results:", response.data.error);
        }
      })
      .catch((error) => {
        console.error("Error fetching results:", error);
      });
  }, [userId]);

  const handleAnswerTriviaClick = () => {
    navigate("/about-program-4");
  };

  return (
    <div className="pro4-containermain">
      <div className="pro4-container">
        <img src="/ADNOC YiS Lockup_NEG.png" alt="Logo" className="logo" />

        <h2>SCIENCE OF RACING!</h2>
        <p>
          Racing head-to-head on the 20-metre track <br />
          is the pinnacle of the Formula Ethara & F1 <br />
          in Schools programs. To be fast, students <br />
          must gain an understanding of the related <br />
          science and math.
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
    </div>
  );
}

export default AboutPageDetails4;
