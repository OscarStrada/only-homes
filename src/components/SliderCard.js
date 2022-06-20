import React from 'react';

export const SliderCard = ({ color }) => {
  return (
    <div
      className={`${color} bg-slate-200 w-[375px] md:w-[320px] md:h-[440px] h-[350px] rounded-lg`}
    >
      {color}
    </div>
  );
};
