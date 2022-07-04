import React from 'react';

export const CharacteristicCard = ({
  icon,
  characteristicName,
  characteristic,
  measurement,
}) => {
  const number = new Intl.NumberFormat('en-us');

  return (
    <div className="bg-gray-100 rounded-md flex flex-col justify-center items-center space-y-5 hover:scale-95 transform transition duration-500 ease-out hover:shadow-xl py-20 md:py-0">
      <div className="flex flex-col justify-center items-center space-y-3">
        {icon}
        <span>{characteristicName}</span>
      </div>
      <div className={`${measurement ? 'flex space-x-2' : ''}`}>
        <p className="tracking-widest">{number.format(characteristic)}</p>
        {measurement ? <span>{measurement}</span> : null}
      </div>
    </div>
  );
};
