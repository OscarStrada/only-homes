import { PhoneIcon } from '@heroicons/react/solid';
import { React, useState } from 'react';
import { Link, Outlet } from 'react-router-dom';

export const Navbar = () => {
  const [navbar, setNavbar] = useState(false);

  const changeNavbar = () => {
    // const heightNavbar = 80;
    const scrollY = window.scrollY;
    // const viewportHeight = window.innerHeight;

    scrollY > 0 ? setNavbar(true) : setNavbar(false);
  };

  window.addEventListener('scroll', changeNavbar);

  return (
    <>
      <nav
        className={`w-full h-16 md:h-20 flex items-center justify-between fixed z-50 bg-white ${
          navbar ? 'border-b-[1px] border-[#e9e9e9]' : 'md:bg-transparent'
        } transition duration-300 ease-out`}
      >
        {/* Navbar container */}
        <div
          className={`w-full h-full px-[25px] md:px-20 flex flex-1 items-center justify-between ${
            navbar ? '' : ''
          }`}
        >
          {/* Left - logo */}
          <Link to={'/'}>
            <span
              className={`md:logo-big logo-small tracking-widest text-[#556277] ${
                navbar ? '' : 'md:text-white'
              }`}
            >
              only homes
            </span>
          </Link>

          {/* Middle - menu */}
          <ul
            className={`w-full h-full justify-center items-center space-x-12 flex-1 hidden ${
              navbar ? 'hidden lg:flex' : ''
            } uppercase text-[#556277] tracking-widest`}
          >
            <li className="cursor-pointer hover:text-black text-sm">Homes</li>
            <li className="cursor-pointer hover:text-black text-sm">Contact</li>
            <li className="cursor-pointer hover:text-black text-sm">Blog</li>
          </ul>

          {/* Right - phone */}
          <div
            className={`space-x-3 hidden md:flex items-center ${
              navbar ? 'text-[#556277]' : 'text-white'
            }`}
          >
            <PhoneIcon className="h-5" />
            <span className="tracking-wider text-sm">+52 222 928 4704</span>
          </div>
        </div>
      </nav>
      <Outlet />
    </>
  );
};
