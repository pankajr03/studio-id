import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
// import './Slider.css'; // Create and import a CSS file for custom styles
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from 'react-icons/fa';
import VideoThumbnail from './VideoThumbnail';
const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slidesPerView, setSlidesPerView] = useState(1);
  const slides = [
    { 
      "id": "1", 
      "videoUrl": 'https://www.w3schools.com/html/mov_bbb.mp4', 
      "thumbnailUrl": 'https://www.w3schools.com/html/pic_trulli.jpg', 
      duration: '00.30' 
    },
    { 
      "id": "2", 
      "videoUrl": "https://www.w3schools.com/html/movie.mp4",
      "thumbnailUrl": "https://www.w3schools.com/html/img_girl.jpg",
      "duration": "01:00"
    },

    { 
      "id": "3", 
      "videoUrl": "https://www.w3schools.com/html/mov_bbb.mp4",
      "thumbnailUrl": "https://www.w3schools.com/html/img_chania.jpg",
      "duration": "00:45"
    },
    { 
      "id": "4", 
      "videoUrl": "https://www.w3schools.com/html/mov_bbb.mp4",
      "thumbnailUrl": "https://dummyimage.com/600x400/000/fff",
      "duration": "01:30"
    },
  ];

  useEffect(() => {
    const handleResize = () => {
      setSlidesPerView(window.innerWidth >= 768 ? 3 : 1);
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Initial check

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => Math.min(prevIndex + 1, slides.length - slidesPerView));
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  };

  const getVisibleSlides = () => {
    const visibleSlides = [];
    for (let i = 0; i < slidesPerView; i++) {
      visibleSlides.push(slides[(currentIndex + i) % slides.length]);
    }
    return visibleSlides;
  };

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-12">
          <div className="slider position-relative">
            {currentIndex > 0 && (
              <button className="btn btn-icon prev" onClick={handlePrev}>
                <FaArrowAltCircleLeft size={40} />
              </button>
            )}
            <div className="slider-content d-flex">
              {getVisibleSlides().map((slide, index) => (
                
                  <div key={index} className="col-12 col-md-6 col-lg-4 mb-4 d-flex justify-content-center">

                  <VideoThumbnail
                    videoUrl={slide.videoUrl}
                    thumbnailUrl={slide.thumbnailUrl}
                    duration={slide.duration}
                  />

                </div>
              ))}
            </div>
            {currentIndex < slides.length - slidesPerView && (
              <button className="btn btn-icon next" onClick={handleNext}>
                <FaArrowAltCircleRight size={40} />
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;