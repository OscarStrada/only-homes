import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Hero } from '../components/Hero';
import { Footer } from '../components/Footer';
import { CharacteristicCard } from '../components/CharacteristicCard';
import { urlFor, client } from '../client';

import { IoBedOutline } from 'react-icons/io5';
import { BiBath } from 'react-icons/bi';
import { FaExpand, FaSwimmingPool } from 'react-icons/fa';
import { BsHouseDoor } from 'react-icons/bs';
import { ContactForm } from '../components/ContactForm';

export const SingleHome = () => {
  const [property, setProperty] = useState(null);
  const { slug } = useParams();
  const usd = new Intl.NumberFormat('en-us');
  const imagePath = '../images/rogelio.jpg';

  {
    property && console.log(property[0]);
  }

  useEffect(() => {
    const query = `*[slug.current == "${slug}"]`;

    client.fetch(query).then((data) => {
      setProperty(data);
    });
  }, []);

  return (
    <div>
      {property?.map(
        ({
          _id,
          name,
          url,
          price,
          location,
          gallery,
          description,
          numOfBedrooms,
          numOfBathrooms,
          numOfPools,
          lotSize,
          buildingSize,
          agent,
        }) => (
          <div key={_id}>
            {/* banner */}
            {console.log('agent = ', agent)}
            <div className="relative w-full h-[700px]">
              <Hero source={urlFor(url)} />
              <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
              <div className="absolute top-0 left-0 w-full h-full px-10 md:px-20 py-20 flex flex-col justify-end items-start text-white space-y-7">
                <span className="font-inter font-normal uppercase tracking-[0.15em]">
                  ${usd.format(price)} USD
                </span>
                <h1 className="text-4xl md:text-6xl leading-snug font-semibold">
                  {name}, {location}
                </h1>
              </div>
            </div>
            {/* body */}
            <div className="px-[25px] md:px-20">
              {/* Characteristics */}
              <div className="w-full md:h-[200px] grid grid-cols-1 md:grid-cols-5 gap-3 mt-20 mb-20 md:mb-40">
                <CharacteristicCard
                  characteristicName={'Bedrooms'}
                  icon={<IoBedOutline className="text-2xl" />}
                  characteristic={numOfBedrooms}
                />
                <CharacteristicCard
                  characteristicName={'Bathrooms'}
                  icon={<BiBath className="text-2xl" />}
                  characteristic={numOfBathrooms}
                />
                <CharacteristicCard
                  characteristicName={'Lot size'}
                  icon={<FaExpand className="text-2xl" />}
                  characteristic={lotSize}
                  measurement={'SqFt'}
                />
                <CharacteristicCard
                  characteristicName={'Building size'}
                  icon={<BsHouseDoor className="text-2xl" />}
                  characteristic={buildingSize}
                  measurement={'SqFt'}
                />
                <CharacteristicCard
                  characteristicName={'Pool'}
                  icon={<FaSwimmingPool className="text-2xl" />}
                  characteristic={numOfPools}
                />
              </div>
              {/* Grid Images */}
              <div className="w-full md:h-[450px] grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-3">
                <div className="h-custom bg-gray-100 md:col-span-2 md:row-span-2 rounded-xl">
                  <img
                    src={urlFor(gallery[0])}
                    className="w-full h-full rounded-xl"
                  />
                </div>
                <div className="h-custom bg-gray-100 rounded-xl">
                  <img
                    src={urlFor(gallery[1])}
                    className="w-full h-full rounded-xl"
                  />
                </div>
                <div className="h-custom bg-gray-100 rounded-xl">
                  <img
                    src={urlFor(gallery[2])}
                    className="w-full h-full rounded-xl"
                  />
                </div>
                <div className="h-custom bg-gray-100 rounded-xl">
                  <img
                    src={urlFor(gallery[3])}
                    className="w-full h-full rounded-xl"
                  />
                </div>
                <div className="h-custom bg-gray-100 rounded-xl">
                  <img
                    src={urlFor(gallery[4])}
                    className="w-full h-full rounded-xl"
                  />
                </div>
              </div>
              {/* Description and Contact form */}
              <div className="pt-20 pb-40 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-3">
                <p>{description}</p>
                {/* Contact form */}
                <section className="md:pl-14">
                  <ContactForm
                    image={imagePath}
                    name={'Rogelio Roca'}
                    color={'#ea6c18'}
                  />
                </section>
              </div>
            </div>
          </div>
        ),
      )}
      <Footer />
    </div>
  );
};
