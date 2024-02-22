import React from 'react';
import Lottie from 'react-lottie';
import load from './load.json';
import img1 from '../image/img 3.jpg';
import Slidingimg from './Slidingimg';

const Home = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: load,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return (
    <div className='w-full h-[550px] text-white'>
      <div className='absolute w-full h-[550px] bg-gradient-to-b from-black'></div>
      <div className='hidden md:flex justify-center items-center'>
        <Slidingimg />
      </div>
      <img className='w-full h-[550px] md:hidden' src={img1} alt='img1' />
      <div className='absolute w-full top-[15%] p-4 md:p-8'>
        <div className='my-4 text-center flex flex-col justify-center'>
          <p className='font-bold text-[45px] my-1 md:px-6 px-3'>
            Discover Your Own<br />
            Equipment Guitar Only With K-guitar.
          </p>
          <p className='px-5 hidden md:block'>
            A guitar store that specializes in selling guitars and related
            musical instruments, accessories, and equipment. These stores
            cater to musicians, guitar enthusiasts, and anyone interested in
            learning or playing the guitar.
          </p>
        </div>
        <div className='md:p-8'>
          <Lottie options={defaultOptions} width={50} />
        </div>
      </div>
    </div>
  );
};

export default Home;