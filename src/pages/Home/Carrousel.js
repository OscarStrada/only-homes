import React, { useState } from 'react';
import { PropertyCard } from '../../components/PropertyCard';
import { Title } from '../../components/Title';
import { slider } from '../../data/db';

export const Carrousel = () => {
  const images = slider;
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const imageSelected = images[selectedImageIndex];
  console.log(imageSelected);

  const handleChangeSelectedImage = (offset) => {
    const newIndex = (selectedImageIndex + offset) % images.length;
    setSelectedImageIndex(newIndex === -1 ? images.length - 1 : newIndex);
  };
  console.log(handleChangeSelectedImage);

  const handleCarrousel = (btn) => {
    const carrousel = document.querySelector('#carrousel');
    btn === 1 ? (carrousel.scrollLeft += 700) : (carrousel.scrollLeft -= 700);
  };

  return (
    <section className="bg-plants px-[25px] md:px-20 py-[60px] md:py-[140px]">
      <Title title={'Listing Properties'} subtitle={'Featured houses'} />

      <div
        id="carrousel"
        className="flex overflow-scroll scrollbar-hide scroll-smooth p-4 -ml-4"
      >
        <div className="flex space-x-10">
          {slider?.map(({ color, id }) => (
            <PropertyCard key={id} color={color} />
          ))}
        </div>
      </div>

      <div>
        <button
          onClick={() => {
            handleCarrousel(0);
          }}
          className="w-[50px] h-[50px] bg-slate-200"
        >
          L
        </button>
        <button
          onClick={() => {
            handleCarrousel(1);
          }}
          className="w-[50px] h-[50px] bg-slate-200"
        >
          R
        </button>
      </div>
    </section>
  );
};
