import React from 'react';

export const Card = ({ url, alt }) => {
  return (
    <div className="w-full h-[280px] md:h-[330px]">
      <img className={'w-full h-full object-cover'} src={url} alt={alt} />
    </div>
  );
};
