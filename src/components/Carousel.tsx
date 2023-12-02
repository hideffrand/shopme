import React, { useState, useEffect } from "react";
import banner1 from "../assets/banners/banner_1.webp";
import banner2 from "../assets/banners/banner_2.webp"
import banner3 from "../assets/banners/banner_3.webp"
import Icon from "./Icon";

const Carousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [banner1, banner2, banner3];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    const intervalId = setInterval(nextSlide, 3000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="mt-14 mb-4 w-full flex items-center justify-center">
      <div className="w-1/2">
        <div className="relative overflow-hidden bg-gray-100 w-80vw h-10vh mx-auto">
          <div className="flex h-full">
            <div
              className="carousel-inner flex transition-transform"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {images.map((imageUrl, index) => (
                <div key={index} className="carousel-item w-full h-full">
                  <img
                    src={imageUrl}
                    alt={`Slide ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          <button
            className="absolute top-1/2 left-2 transform -translate-y-1/2"
            onClick={prevSlide}
          >
            <Icon name="caret-back-outline" color="white" />
          </button>
          <button
            className="absolute top-1/2 right-2 transform -translate-y-1/2"
            onClick={nextSlide}
          >
            <Icon name="caret-forward-outline" color="white" />
          </button>
          <div className="p-3 absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-4 h-4 rounded-full bg-white ${
                  currentIndex === index ? "bg-gray-800" : ""
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
