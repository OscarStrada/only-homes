import React from 'react';
import { Link } from 'react-router-dom';

export const Button = ({
  small,
  medium,
  children,
  color,
  textcolor,
  url,
  border,
}) => {
  return (
    <Link to={url}>
      <div
        className={`${
          small
            ? 'py-[9px] px-6 text-[10px] rounded-[3px]'
            : medium
            ? 'py-[15px] px-11 text-xs rounded-md'
            : 'py-5 px-10 text-xs rounded-md'
        } flex items-center justify-center space-x-4 w-full h-full cursor-pointer select-none tracking-[0.2em] uppercase font-inter`}
        style={{
          border: `1px solid ${border}`,
          backgroundColor: `${color}`,
          color: `${textcolor}`,
        }}
      >
        <div>{children}</div>
      </div>
    </Link>
  );
};
