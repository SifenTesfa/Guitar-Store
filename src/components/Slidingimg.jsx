import React, { useEffect, useState } from 'react';
import img2 from '../image/img2 (2).png';
import img3 from '../image/img 3.jpg';
import img4 from '../image/img 4.jpg';

const SlidingImage = () => {
  const [slideIndex, setSlideIndex] = useState(0);

  useEffect(() => {
    // Increment slide index every 3 seconds
    const interval = setInterval(() => {
      setSlideIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const images = [
    img2,
    img3,
    img4,
  ];

  return (
    <div className="w-full  max-w-lg sm:max-w-md  md:max-w-lg lg:max-w-full ">
      <img
        className="w-full h-[800px] md:max-h-[550px]  animate-slide"
        src={images[slideIndex]}
        alt="Sliding Image"
        
      />
      
    </div>
  );
};

export default SlidingImage;