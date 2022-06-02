import React from 'react';

export const Hero = ({ source, metatags }) => {
  return (
    <img className="w-full h-full object-cover" src={source} alt={metatags} />
  );
};
