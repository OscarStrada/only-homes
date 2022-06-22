import React from 'react';
import { Link } from 'react-router-dom';

export const Button = ({ small, children, color, textcolor, url }) => {
  return (
    <Link to={url}>
      <div
        className={`${
          small
            ? 'h-[30px] text-[10px] rounded-[3px]'
            : 'h-[55px] text-xs rounded-md'
        } flex items-center justify-center space-x-4 w-full cursor-pointer select-none tracking-[0.2em] uppercase font-inter`}
        style={{ backgroundColor: `${color}`, color: `${textcolor}` }}
      >
        <div>{children}</div>
      </div>
    </Link>
  );
};
