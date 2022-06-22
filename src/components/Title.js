import React from 'react';

export const Title = ({ title, subtitle, isForWhiteBackground }) => {
  return (
    <div className="text-center flex flex-col">
      <p
        className={`${
          isForWhiteBackground ? 'text-white' : 'text-gray-500'
        } font-inter font-normal uppercase tracking-[0.15em] md:tracking-[0.2em] text-xs`}
      >
        {subtitle}
      </p>
      <h2
        className={`${
          isForWhiteBackground ? 'text-white' : 'text-[#061D3A]'
        } text-4xl md:text-[48px] font-semibold pt-8`}
      >
        {title}
      </h2>
    </div>
  );
};
