import { PhoneIcon } from '@heroicons/react/solid';
import { React, useState } from 'react';
import { Outlet } from 'react-router-dom';

export const Navbar = () => {
  const [navbar, setNavbar] = useState(false);

  const changeNavbar = () => {
    // const heightNavbar = 80;
    const scrollY = window.scrollY;
    // const viewportHeight = window.innerHeight;

    scrollY > 10 ? setNavbar(true) : setNavbar(false);
  };

  window.addEventListener('scroll', changeNavbar);

  return (
    <>
      <nav
        className={`w-full h-16 md:h-20 flex items-center justify-between fixed z-50 bg-white ${
          navbar ? '' : 'md:bg-transparent'
        } transition duration-300 ease-out`}
      >
        {/* Left menu */}
        <div className="w-16 h-16 md:w-20 md:h-20 flex justify-center items-center border-r-[1px] border-b-[1px] border-[#e9e9e9] bg-white">
          <img src="/menu-icon.svg" className="cursor-pointer" />
        </div>

        {/* Right menu */}
        <div
          className={`w-full h-full px-[25px] md:px-[40px] flex flex-1 items-center justify-between ${
            navbar ? 'border-b-[1px] border-[#e9e9e9]' : ''
          }`}
        >
          {/* Left - logo */}
          <span
            className={`md:logo-big logo-small tracking-widest text-black ${
              navbar ? '' : 'md:text-white'
            }`}
          >
            only homes
          </span>

          {/* Middle - menu */}
          <ul
            className={`w-full h-full justify-center items-center space-x-12 flex-1 text-base hidden ${
              navbar ? 'hidden lg:flex' : ''
            } uppercase text-[#556277] tracking-widest`}
          >
            <li>Homes</li>
            <li>Contact</li>
            <li>Blog</li>
          </ul>

          {/* Right - phone */}
          <div
            className={`space-x-4 text-black hidden md:flex${
              navbar ? '' : 'md:text-white'
            }`}
          >
            <PhoneIcon className="md:flex hidden h-6" />
            <span className="tracking-wider">+52 222 928 4704</span>
          </div>
        </div>
      </nav>
      <Outlet />
    </>
  );
};
