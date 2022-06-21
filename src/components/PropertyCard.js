import React from 'react';

export const PropertyCard = ({ image, title, description, price, color }) => {
  return (
    <div
      className={`cursor-pointer hover:scale-105 transform transition duration-300 ease-out ${color} w-[375px] md:w-[320px] md:h-[440px] h-[350px] rounded-xl`}
    ></div>
  );
};
