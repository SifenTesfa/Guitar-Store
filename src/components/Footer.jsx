import React from 'react';
import img14 from '../image/img14.png';
import { FaTelegram } from 'react-icons/fa';
import { AiOutlineFacebook, AiOutlineYoutube, AiOutlineLinkedin, AiOutlineTwitter } from 'react-icons/ai';
import { Link } from 'react-scroll';

const Footer = () => {
  return (
    <div>
      <footer className="pt-16  ">
      <img
          src={img14}
          alt='img14'
          className=' w-full absolute lg:block hidden object-cover '
        />
        
        
        <div className=" mx-auto absolute lg:top-[480%] py-8 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/3 lg:w-1/4 mb-8 md:mb-0">
            <h3 className="font-bold text-orange-400 text-[20px] mb-4">About Us</h3>
            <p className="text-gray-300 text-sm">In our guitar store, you can typically find a wide variety of guitars,
          including acoustic guitars, electric guitars, bass guitars, and classical
          guitars. We may also offer different brands, models, and styles to suit
          various musical genres and player preferences.</p>
          </div>
          <div className="w-full md:w-1/3 lg:w-1/4 mb-4 md:mb-0">
            <p className='text-orange-400 text-[20px] font-bold'>Other Pages</p>
            <ul className="list-none">
              <li className="text-gray-300 hover:text-orange-400 text-sm mb-2 block" > <Link to='home' 
          activeClass='active'
          smooth={true}
          spy={true}>Home </Link></li>
              <li className="text-gray-300 hover:text-orange-400 text-sm mb-2 block" ><Link to='about' 
          activeClass='active'
          smooth={true}
          spy={true}>About </Link></li>
              <li className="text-gray-300 hover:text-orange-400 text-sm mb-2 block" ><Link to='categories' 
          activeClass='active'
          smooth={true}
          spy={true}>Categories </Link></li>
              <li className="text-gray-300 hover:text-orange-400 text-sm mb-2 block" ><Link to='contact' 
          activeClass='active'
          smooth={true}
          spy={true}>Contact </Link></li>
              
              
            </ul>
          <div className="flex h-40 w-40 justify-center items-center">
        
        </div>
           
            
            
          </div>
          <div className="w-full md:w-1/3 lg:w-1/4 mb-8 md:mb-0">
            <h3 className="text-orange-400 font-bold text-[20px] mb-4">Our Store</h3>
            <ul className="list-none">
              <li className="text-gray-300 hover:text-white text-sm mb-2 block" >Jalan Sunset Road No. 189, Kuta - Bali</li>
              <li className="text-gray-300 hover:text-white text-sm mb-2 block" >09 AM - 10 PM , Monday - Saturday</li>
              <li className="text-gray-300 hover:text-white text-sm mb-2 block" >+62 345 678 890</li>
              <li className="text-gray-300 hover:text-white text-sm mb-2 block" >jbanez@domain.com</li>
              
              
            </ul>
          </div>
        </div>
       
        <p className='mb-2  text-orange-400'>Follow Us</p>
        <div className='flex'>
       < AiOutlineFacebook className="h-5 w-5 hover:text-orange-400 mr-4 text-white" aria-hidden="true" />
       < AiOutlineYoutube className="h-5 w-5 hover:text-orange-400 text-white  mr-4" aria-hidden="true" />
       < AiOutlineLinkedin className="h-5 w-5 hover:text-orange-400 text-white  mr-4" aria-hidden="true" />
       < AiOutlineTwitter className="h-5 w-5 hover:text-orange-400 text-white  mr-4" aria-hidden="true" />
       < FaTelegram className="h-5 w-5  text-white hover:text-orange-400 mr-4" aria-hidden="true" />

       </div>
        <div className="mt-8 border-t bg-orange-400 border-gray-800 ">
          <p className="text-gray-700 text-sm text-center">&copy;  Copyright © Jegtheme 2024. All Right Reserved.</p>
        </div>
      </div>
    </footer></div>
  );
};

export default Footer;