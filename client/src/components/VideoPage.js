/* eslint-disable */
import React from 'react';
import YouTube from 'react-youtube';
import { useNavigate } from 'react-router-dom';
import '../styles/VideoPage.css';

const VideoPage = () => {
  const navigate = useNavigate();
  
  // Replace the videoId with the new video ID from your YouTube link
  const videoId = 'zh316cXbxlY'; // New YouTube video ID
  
  const handleVideoEnd = () => {
    // Redirect to the post-video page when the video ends
    navigate('/post-video');
  };

  const videoOptions = {
    playerVars: {
      autoplay: 1
    }
  };

  return (
    <div className="video-container">
      <h2>Program Video</h2>
      <div className="youtube-video">
        {/* Use the updated videoId and options */}
        <YouTube videoId={videoId} opts={videoOptions} onEnd={handleVideoEnd} />
      </div>
    </div>
  );
};

export default VideoPage;
