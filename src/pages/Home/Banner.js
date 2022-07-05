import { useState, useEffect } from 'react';
import { Hero } from '../../components/Hero';
import { Slider } from '../../components/Slider';
import { Button } from '../../components/Button';

import { urlFor, client } from '../../client';

export const Banner = () => {
  const [newProp, setNewProp] = useState(null);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const handleChangeSelectedImage = (offset) => {
    console.log('newProp = ', newProp);
    const newIndex = (selectedImageIndex + offset) % newProp.length;
    setSelectedImageIndex(newIndex === -1 ? newProp.length - 1 : newIndex);
  };

  useEffect(() => {
    const query = '*[_type == "properties"]';

    client.fetch(query).then((data) => {
      const propFilter = data.filter((prop) => prop.banner === true);
      setNewProp(propFilter);
    });
  }, []);

  return (
    <>
      <div className="relative w-full h-screen">
        {newProp && <Hero source={urlFor(newProp[selectedImageIndex].url)} />}
        <div className="absolute top-0 left-0 w-full h-screen bg-black opacity-50 z-20"></div>

        <main className="absolute space-y-10 md:space-y-12 top-16 left-0 md:top-20 w-full h-[calc(100vh-64px)] md:h-[calc(100vh-80px)] z-30">
          <div className="pl-[25px] md:pl-20 pt-20 md:pt-32 w-3/4 md:w-1/2 space-y-8 text-white">
            <p className="font-inter font-normal uppercase tracking-[0.15em] md:tracking-[0.2em] text-xs">
              Search your next home
            </p>
            <h1 className="text-4xl md:text-[75px] font-semibold leading-tight font-poppins">
              Find homes for sale in Tulum
            </h1>
          </div>

          <div className="pl-[25px] md:pl-[80px] w-[240px] md:w-[300px]">
            <Button border={'white'} textcolor={'white'} url={'/homes'}>
              All properties
            </Button>
          </div>

          {/* Slider */}
          <div className="absolute w-full flex justify-end right-0 bottom-0">
            {newProp && (
              <Slider
                onIndexChanged={handleChangeSelectedImage}
                title={newProp[selectedImageIndex].name}
                price={newProp[selectedImageIndex].price}
                location={newProp[selectedImageIndex].location}
              />
            )}
          </div>
        </main>
      </div>
    </>
  );
};
