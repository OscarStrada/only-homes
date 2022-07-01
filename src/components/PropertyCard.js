import React from 'react';
import { Button } from './Button';

export const PropertyCard = ({
  image,
  alt,
  title,
  location,
  description,
  price,
  query,
}) => {
  const usd = new Intl.NumberFormat('en-us');

  return (
    <section>
      {/* main container */}
      <div className="md:hover:scale-105 transform transition duration-300 ease-out w-[320px] h-[440px] rounded-xl flex flex-col bg-[#f9f9f9]">
        {/* Top - image */}
        <div className="h-1/2 rounded-xl">
          <img
            className="w-full h-full rounded-t-xl object-cover"
            src={image}
            alt={alt}
          />
        </div>

        {/* Bottom */}
        <div className="p-7 space-y-5">
          <h4 className="text-xl font-semibold">
            {title}, {location}
          </h4>
          <p className="text-sm font-light">{description}</p>
          <div className="flex justify-between items-end pt-4">
            {/* Price */}
            <div className="flex flex-col space-y-2 flex-1">
              <span className="font-inter font-normal uppercase tracking-[0.15em] md:tracking-[0.2em] text-xs">
                Price
              </span>
              <span className="font-medium">${usd.format(price)} USD</span>
            </div>
            {/* Button */}
            <div className="w-[100px]">
              <Button
                small
                color={'#ea6c18'}
                textcolor="#ffffff"
                url={`/homes/${query}`}
              >
                Details
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
