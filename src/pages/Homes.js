import { useState, useEffect } from 'react';
import { NavbarFixed } from '../components/NavbarFixed';
import { urlFor, client } from '../client';
import { CardProperty } from '../components/CardProperty';
import { Footer } from '../components/Footer';
import { Title } from '../components/Title';

export const Homes = () => {
  const [properties, setProperties] = useState(null);

  useEffect(() => {
    const query = '*[_type == "properties"]';

    client.fetch(query).then((data) => {
      setProperties(data);
    });
  }, []);

  return (
    <div>
      <NavbarFixed />
      <main className="px-[25px] md:px-20 py-32 md:py-40">
        <div className="pb-14">
          <Title
            title={'Listing Properties'}
            subtitle={'All properties'}
            isLeft
          />
        </div>
        <div className="w-full">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-9 w-full">
            {properties?.map(
              ({
                name,
                location,
                price,
                url,
                description,
                slug,
                numOfBedrooms,
                numOfBathrooms,
                lotSize,
                buildingSize,
                _id,
              }) => (
                <CardProperty
                  key={_id}
                  image={urlFor(url)}
                  title={name}
                  location={location}
                  description={description}
                  price={price}
                  query={slug.current}
                  numOfBedrooms={numOfBedrooms}
                  numOfBathrooms={numOfBathrooms}
                  lotSize={lotSize}
                  buildingSize={buildingSize}
                />
              ),
            )}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};
