import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/Button';
import { ScrollBar } from '../components/ScrollBar';
import { Slider } from '../components/Slider';

export const Home = () => {
  return (
    <div className="h-[5000px]">
      <ScrollBar />
      <div className="relative w-full h-screen bg-blend-multiply">
        <img
          src="/hero-image.png"
          alt="tulum house"
          className="w-full h-full object-cover"
        />
        <div className="absolute top-0 left-0 w-full h-screen bg-black opacity-40 mix-blend-multiply z-20"></div>

        <main className="absolute space-y-16 top-16 left-0 md:top-20 md:left-20 w-full h-[calc(100vh-64px)] md:w-[calc(100vw-80px)] md:h-[calc(100vh-80px)] z-30">
          <div className="pl-[30px] md:pl-[80px] pt-28 md:pt-36 w-3/4 md:w-1/2 space-y-8 text-white">
            <p className="font-inter font-normal uppercase tracking-[0.2em] text-xs">
              Find homes for sale in tulum
            </p>
            <h1 className="text-[65px] md:text-[75px] font-semibold leading-none font-poppins">
              Discover your next home
            </h1>
          </div>

          <div className="pl-[30px] md:pl-[80px] w-[280px]">
            <Link to="/contact">
              <Button color={'white'} textColor="#061D3A">
                All properties
              </Button>
            </Link>
          </div>

          <div className="absolute w-full right-0 bottom-0">
            <Slider />
          </div>
        </main>
      </div>
    </div>
  );
};
