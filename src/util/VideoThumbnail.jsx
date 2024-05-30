import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './VideoThumbnail.css';

const VideoThumbnail = ({ videoUrl, thumbnailUrl, duration }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <div className="video-thumbnail" onClick={handleOpen}>
        <img src={thumbnailUrl} alt="Video Thumbnail" className="thumbnail-image img-thumbnail"/>
        <div className="duration">{duration}</div>
      </div>

      {isOpen && (
        <div className="video-popup">
          <div className="overlay" onClick={handleClose}></div>
          <div className="video-content">
            <button className="close-button" onClick={handleClose}>×</button>
            <video controls autoPlay className="popup-video">
              <source src={videoUrl} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      )}
    </div>
  );
};

export default VideoThumbnail;