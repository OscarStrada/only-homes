import React from 'react';
import { Card } from '../../components/Card';
import { Title } from '../../components/Title';
import { cards } from '../../data/db';

export const InvestInTulum = () => {
  return (
    <div
      className="w-full bg-[#FAFBF9] my-[60px] 
    md:mb-0 md:mt-[140px] pt-28 pb-52"
    >
      <div className="flex flex-col md:flex-row px-[25px] md:px-20 pb-28 md:space-x-28">
        {/* Title */}
        <div className="w-full md:w-3/5">
          <Title
            title={'Why you should investing in Tulum this 2023?'}
            subtitle={'About tulum'}
            isLeft
          />
        </div>

        {/* Paragraphs */}
        <div className="w-full md:w-2/5 font-normal text-gray-500 space-y-7 pt-10">
          <p className="leading-relaxed">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Voluptatum, fuga ipsum, adipisicing elit volutum, fuga ipsum.
          </p>
          <p className="leading-relaxed">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
            ab quaerat laboriosam saepe corrupti, earum pariatur reprehenderit
            et.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 bg-slate-100 w-full">
        {cards?.map(({ url, alt, id }) => (
          <Card key={id} url={`${url}/${id}.jpg`} alt={alt} />
        ))}
      </div>
    </div>
  );
};
