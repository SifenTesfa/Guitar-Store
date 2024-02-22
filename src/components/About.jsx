import React from 'react';
import img6 from '../image/image.png';
import CountUp from "react-countup"
import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';
const About = () => {
 
  const [ref, inView] = useInView({
    threshold: 0.5,
  });

  
  return (
    <section ref={ref}>
    <div className='w-full p-4 lg:pb-[50px] h-full md:w-full md:h-full md:pt-24 flex flex-wrap bg-white text-black'>
      <div className='w-full md:w-1/2 flex lg:pt-[45px] items-center'>
        <img
          src={img6}
          alt='img6'
          className='hidden md:block w-full object-cover pr-16 pl-16'
        />
      </div>
      <div className='w-full md:w-1/2 pt-24 p-4'>
        <p>About Us</p>
        <p className='font-bold text-[45px]'>More than 100+ guitars<br />in our store</p>
        <p>
          In our guitar store, you can typically find a wide variety of guitars,
          including acoustic guitars, electric guitars, bass guitars, and classical
          guitars. We may also offer different brands, models, and styles to suit
          various musical genres and player preferences.
        </p>
        <div  className='flex gap-x-6 lg:gp-x-10 mb-12'>
              <div>
                <div className='text-[40px] font-bold font-tertiary text-gradient mb-2'>
                {inView?  <CountUp start={0} end={15} duration={3} />:null}
                 k+
                 
                </div>
                <div className='font-primary text-sm tracking-[2px]'>
                  Projects <br/>
                 Comleted
                </div>
              </div>
              <div>
                <div className='text-[40px] font-bold font-tertiary text-gradient mb-2'>
                {inView? <CountUp start={0} end={12} duration={5} />:null}
                  k+
                </div>
                <div className='font-primary text-sm tracking-[2px]'>
                 Satisfied <br/>
                  Client
                </div>
              </div>
              <div>
                <div className='text-[40px] font-bold font-tertiary text-gradient mb-2'>
                {inView?<CountUp start={0} end={13} duration={3} />:null}
                  
                </div>
                <div className='font-primary text-sm tracking-[2px]'>
                  Years of <br/>
                  Experience
                </div>
              </div>
            </div>
      </div>
    </div>
    
     </section>
  );
};

export default About;