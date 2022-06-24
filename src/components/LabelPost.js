import React from 'react';

export const LabelPost = ({ date }) => {
  return (
    <div className="bg-[#FAFBF9] py-3 px-7 w-full rounded-md">
      <p className="font-inter font-light uppercase tracking-[0.15em] md:tracking-[0.2em] text-[10px]">
        {date}
      </p>
    </div>
  );
};
