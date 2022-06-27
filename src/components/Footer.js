import React from 'react';

export const Footer = () => {
  return (
    <div className="w-full px-[25px] md:px-20 mt-[200px] pb-10 flex justify-end items-center">
      <div>
        <span className="uppercase text-[#556277] text-sm tracking-widest">
          © 2022 Only homes Tulum, powered by
          <a
            className={'hover:text-black'}
            href="https://khutz.com"
            target="_blank"
            rel="noreferrer"
          >
            {' '}
            khutz
          </a>
        </span>
      </div>
    </div>
  );
};
