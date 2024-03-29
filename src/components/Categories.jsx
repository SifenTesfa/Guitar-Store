import React from 'react';
import { data } from './mockData';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';



function Categories() {
    const slideLeft = () => {
        var slider = document.getElementById('slider');
        slider.scrollLeft = slider.scrollLeft - 500;
      };
    
      const slideRight = () => {
        var slider = document.getElementById('slider');
        slider.scrollLeft = slider.scrollLeft + 500;
      };
    
    return (
        <div className='lg:pt-[60px]' id='categories'>
        <p
          className='w-full text-[40px] p-2 text-center justify-center text-orange-400 font-bold  object-cover'
         
        >  Categories </p>
        <p className='w-full  text-center p-4 justify-center text-white font-bold object-cover'>Visit our guitar store and find the guitar you've been looking for. Come and make your purchase today!</p>
        <div className='relative flex items-center'>
          <MdChevronLeft className='opacity-50  cursor-pointer hover:opacity-100' onClick={slideLeft} size={40} />
          <div
            id='slider'
            className='w-full h-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide'
          >
            {data.map((item) => (
              <img
                className='w-[220px] inline-block p-2 cursor-pointer hover:scale-105 ease-in-out duration-300'
                src={item.img}
                alt='/'
              />
            ))}
          </div>
          <MdChevronRight className='opacity-50 cursor-pointer  hover:opacity-100' onClick={slideRight} size={40} />
        </div>
      </div>
    );
}

export default Categories;