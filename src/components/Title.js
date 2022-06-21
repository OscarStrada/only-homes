import React from 'react';

export const Title = ({ title, subtitle }) => {
  return (
    <div className="text-center my-9 md:my-16 flex flex-col">
      <p className="font-inter font-normal uppercase tracking-[0.15em] md:tracking-[0.2em] text-xs">
        {subtitle}
      </p>
      <h2 className="text-4xl md:text-[48px] font-semibold text-[#061D3A] pt-4">
        {title}
      </h2>
    </div>
  );
};
