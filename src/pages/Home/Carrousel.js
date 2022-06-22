import React from 'react';
import { PropertyCard } from '../../components/PropertyCard';
import { Title } from '../../components/Title';
import { slider } from '../../data/db';

export const Carrousel = () => {
  return (
    <section className="px-[25px] md:px-20 py-[60px] md:py-[140px] bg-plants">
      <div className="mb-9 md:mb-16">
        <Title title={'Featured Properties'} subtitle={'Listing houses'} />
      </div>

      <div
        id="carrousel"
        className="flex overflow-scroll scrollbar-hide scroll-smooth p-4 -ml-4"
      >
        <div className="flex space-x-10">
          {slider?.map(({ url, id, title, location, price, description }) => (
            <PropertyCard
              key={id}
              image={url}
              title={title}
              location={location}
              description={description}
              price={price}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
