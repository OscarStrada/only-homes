import { useState, useEffect } from 'react';
import { PropertyCard } from '../../components/PropertyCard';
import { Title } from '../../components/Title';

import { urlFor, client } from '../../client';

export const Carrousel = () => {
  const [featuredProperties, setFeaturedProperties] = useState(null);

  useEffect(() => {
    const query = '*[_type == "properties"]';

    client.fetch(query).then((data) => {
      const filterProperties = data.filter((prop) => prop.featured === true);
      setFeaturedProperties(filterProperties);
    });
  }, []);

  return (
    <section className="px-[25px] md:px-20 py-[60px] md:py-[140px] bg-plants">
      <div className="mb-9 md:mb-16">
        <Title title={'Featured Properties'} subtitle={'Listing houses'} />
      </div>

      <div
        className="flex overflow-scroll scrollbar-hide scroll-smooth 
      p-4 -ml-4"
      >
        <div className="flex space-x-10">
          {featuredProperties?.map(
            ({ name, location, price, url, description }) => (
              <PropertyCard
                key={name}
                image={urlFor(url)}
                title={name}
                location={location}
                description={description}
                price={price}
              />
            ),
          )}
        </div>
      </div>
    </section>
  );
};
