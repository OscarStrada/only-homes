import React from 'react';

export const Footer = () => {
  return (
    <div className="w-full px-[25px] md:px-20 mt-[200px] pb-10 flex justify-between items-center">
      <div>
        <ul className="flex flex-1 uppercase text-[#556277] tracking-widest space-x-12">
          <li className="cursor-pointer hover:text-black text-sm">Homes</li>
          <li className="cursor-pointer hover:text-black text-sm">Contact</li>
          <li className="cursor-pointer hover:text-black text-sm">Blog</li>
        </ul>
      </div>
      <div>
        <span className="uppercase text-[#556277] tracking-widest">
          © 2022 Only homes Tulum, powered by khutz{' '}
        </span>
      </div>
    </div>
  );
};
