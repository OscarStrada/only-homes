import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../../components/Button';
import { Hero } from '../../components/Hero';
import { db } from '../../data/db';

export const Banner = () => {
  const images = db;
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const imageSelected = images[selectedImageIndex];

  const handleChangeSelectedImage = (offset) => {
    const newIndex = (selectedImageIndex + offset) % images.length;
    setSelectedImageIndex(newIndex === -1 ? images.length - 1 : newIndex);
  };

  return (
    <>
      <div className="relative w-full h-screen bg-blend-multiply">
        <Hero source={imageSelected.url} />
        <div className="absolute top-0 left-0 w-full h-screen bg-black opacity-[0.45] mix-blend-multiply z-20"></div>

        <main className="absolute space-y-10 md:space-y-12 top-16 left-0 md:top-20 md:left-20 w-full h-[calc(100vh-64px)] md:w-[calc(100vw-80px)] md:h-[calc(100vh-80px)] z-30">
          <div className="pl-[30px] md:pl-[80px] pt-20 md:pt-36 w-3/4 md:w-1/2 space-y-8 text-white">
            <p className="font-inter font-normal uppercase tracking-[0.15em] md:tracking-[0.2em] text-xs">
              Find homes for sale in tulum
            </p>
            <h1 className="text-5xl md:text-[75px] font-semibold leading-none font-poppins">
              Discover your next home
            </h1>
          </div>

          <div className="pl-[30px] md:pl-[80px] w-[240px] md:w-[280px]">
            <Link to="/contact">
              <Button color={'white'} textColor="#061D3A">
                All properties
              </Button>
            </Link>
          </div>

          {/* Slider */}
          <div className="absolute w-full flex justify-end right-0 bottom-0">
            <div className="flex w-full md:w-[500px] h-[140px] bg-white rounded-tl-md">
              {/* left */}
              <div className="w-[75px] h-full flex flex-col justify-center items-center space-y-12">
                <img
                  src="/arrow-right.svg"
                  alt="arrow right"
                  className="cursor-pointer"
                  onClick={() => handleChangeSelectedImage(1)}
                />
                <img
                  src="/arrow-left.svg"
                  alt="arrow left"
                  className="cursor-pointer"
                  onClick={() => handleChangeSelectedImage(-1)}
                />
              </div>
              {/* middle */}
              <div className="flex flex-col flex-1 h-full bg-[#FAFBF9] px-[35px] justify-center items-start space-y-3">
                <span className="text-[22px] font-medium text-[#061D3A]">
                  {imageSelected.title}
                </span>
                <p className="font-inter text-xs font-light text-[#061D3A] tracking-[0.2em] uppercase">
                  {`for sale $${imageSelected.price} USD`}
                </p>
              </div>
              {/* right */}
              <div className="w-[80px] h-full hidden md:flex justify-center items-center">
                <img src="/chevron-right.svg" alt="chevron icon" />
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};
