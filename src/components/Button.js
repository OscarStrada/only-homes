import { ArrowRightIcon } from '@heroicons/react/solid';

import React from 'react';

export const Button = ({ children, color, rightArrow, textColor }) => {
  return (
    <div
      className="flex items-center justify-center space-x-4 w-full h-[55px] rounded-md cursor-pointer select-none tracking-[0.2em] uppercase font-inter text-xs"
      style={{ backgroundColor: `${color}`, color: `${textColor}` }}
    >
      <div>{children}</div>
      {rightArrow && <ArrowRightIcon className="w-[18px]" />}
    </div>
  );
};
