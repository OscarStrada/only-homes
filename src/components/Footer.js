import React from 'react';

export const Footer = () => {
  return (
    <div className="w-full px-[25px] md:px-20 pb-10 flex justify-center md:justify-end items-center">
      <div className="text-center md:text-right w-3/4 md:w-full">
        <span className="uppercase text-[#556277] text-sm tracking-widest">
          © 2022 Only homes Tulum,
          <a
            className={'hover:text-black'}
            href="https://khutz.com"
            target="_blank"
            rel="noreferrer"
          >
            {' '}
            powered by khutz
          </a>
        </span>
      </div>
    </div>
  );
};
