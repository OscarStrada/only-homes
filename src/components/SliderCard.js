import React from 'react';

export const SliderCard = ({ color }) => {
  return (
    <div
      className={`${color} bg-slate-200 w-[375px] md:w-[700px] md:h-[400px] h-[350px] card`}
    >
      {color}
    </div>
  );
};
