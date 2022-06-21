import React from 'react';

export const PropertyCard = ({ image, title, description, price, color }) => {
  return (
    <div
      className={`cursor-pointer hover:scale-105 transform transition duration-300 ease-out ${color} h-72 w-72 md:w-[320px] md:h-[440px] rounded-xl`}
    ></div>
  );
};
