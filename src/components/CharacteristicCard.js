import React from 'react';

export const CharacteristicCard = ({ characteristicName, icon }) => {
  return (
    <div className="bg-gray-100 rounded-md flex flex-col justify-center items-center space-y-3 hover:scale-95 transform transition duration-500 ease-out hover:shadow-xl py-20 md:py-0">
      {icon}
      <span>{characteristicName}</span>
    </div>
  );
};
