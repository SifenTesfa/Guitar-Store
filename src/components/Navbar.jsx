import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { Link } from 'react-scroll';
const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="">
      <div className="flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white">
        <h1 className="w-full p-4 px-6 text-3xl text-orange-400 font-bold">K-guitar.</h1>
        <ul className="hidden md:flex">
        <li className='relative group px-3 py-2'>
                <button className='hover:text-orange-400 h-24 p-4 cursor-default'>
                 <Link to='home' 
          activeClass='active'
          smooth={true}
          spy={true}>Home </Link></button> </li> 
                 <li className='relative group px-3 py-2'>
                <button className='hover:text-orange-400 h-24 p-4 cursor-default'>
                <Link to='about' 
          activeClass='active'
          smooth={true}
          spy={true}>About </Link></button> </li> 
                 <li className='relative group px-3 py-2'>
                <button className='hover:text-orange-400 h-24 p-4 cursor-default'>
                <Link to='categories' 
          activeClass='active'
          smooth={true}
          spy={true}>Categories </Link></button> </li> 
                
                 <li className='relative group px-3 py-2'>
                <button className='hover:text-orange-400 h-24 p-4 cursor-default'>
                <Link to='contact' 
          activeClass='active'
          smooth={true}
          spy={true}>Contact </Link></button> </li> 
        </ul>
        <div onClick={handleNav} className="block p-6 md:hidden">
          {nav ?   <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
        </div>
      </div>
      <div
        className={`${
          nav
            ? 'fixed left-0 top-0 w-[80%] h-full border-r border-white-700 bg-[#000000] ease-in-out duration-500 z-10 md:hidden'
            : 'fixed left-[-100%] block md:hidden'
        }`}
      >
        <h1 className="w-full text-3xl text-[#ffff] p-4 font-bold m-3">K-guitar.</h1>
        <ul className="uppercase p-4 block md:hidden">
          <li className="p-4 border-b text-[#ffff]  hover:text-orange-400 border-gray-600" ><Link to='home' 
          activeClass='active'
          smooth={true}
          spy={true} onClick={handleNav}>Home </Link></li>
          <li className="p-4 border-b text-[#ffff] hover:text-orange-400 border-gray-600" ><Link to='about' 
          activeClass='active'
          smooth={true}
          spy={true} onClick={handleNav}>About </Link></li>
          <li className="p-4 border-b text-[#ffff] hover:text-orange-400 border-gray-600"><Link to='categories' 
          activeClass='active'
          smooth={true}
          spy={true} onClick={handleNav}>Categories</Link></li>
          <li className="p-4 border-b text-[#ffff] hover:text-orange-400 border-gray-600"><Link to='contact' 
          activeClass='active'
          smooth={true}
          spy={true} onClick={handleNav}>Contact </Link></li>
          <li className="p-4">Contact</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;