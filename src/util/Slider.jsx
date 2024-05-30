import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slidesPerView, setSlidesPerView] = useState(1);
  const slides = [
    { id: 1, content: 'Slide 1' },
    { id: 2, content: 'Slide 2' },
    { id: 3, content: 'Slide 3' },
    { id: 4, content: 'Slide 4' },
    { id: 5, content: 'Slide 5' },
    { id: 6, content: 'Slide 6' },
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
          <div className="slider">
            <div className="slider-content d-flex">
              {getVisibleSlides().map((slide) => (
                <div key={slide.id} className="slide-box col-12 col-md-4 text-center p-3">
                  <div className="p-4 border rounded">{slide.content}</div>
                </div>
              ))}
            </div>
            <div className="d-flex justify-content-between mt-3">
              {currentIndex > 0 && (
                <button className="btn btn-primary" onClick={handlePrev}>
                  Prev
                </button>
              )}
              {currentIndex < slides.length - slidesPerView && (
                <button className="btn btn-primary" onClick={handleNext}>
                  Next
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;
