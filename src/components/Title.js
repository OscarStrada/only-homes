import React from 'react';

export const Title = ({ title, subtitle, isForWhiteBackground, isLeft }) => {
  return (
    <div className={`${isLeft ? 'text-left' : 'text-center'} flex flex-col`}>
      <p
        className={`${
          isForWhiteBackground ? 'text-white' : 'text-gray-500'
        } font-inter font-normal uppercase tracking-[0.15em] md:tracking-[0.2em] text-xs`}
      >
        {subtitle}
      </p>
      <h2
        className={`${isForWhiteBackground ? 'text-white' : 'text-[#061D3A]'} ${
          isLeft ? 'md:text-[34px]' : 'md:text-[48px]'
        } text-4xl font-semibold pt-6 md:pt-8 leading-tight`}
      >
        {title}
      </h2>
    </div>
  );
};
