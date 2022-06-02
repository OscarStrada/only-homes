import React from 'react';

export const Carrousel = () => {
  return (
    <>
      <div className="bg-slate-100 w-full h-[937px] bg-plants">
        <div className="relative md:left-20 w-full md:w-[calc(100vw-80px)] h-full py-[140px] flex justify-center">
          <div className="text-center">
            <p className="font-inter font-normal uppercase tracking-[0.15em] md:tracking-[0.2em] text-xs">
              Featured houses
            </p>
            <h2 className="text-[48px] font-semibold text-[#061D3A] pt-2">
              Listing Properties
            </h2>
          </div>
        </div>
      </div>
    </>
  );
};
