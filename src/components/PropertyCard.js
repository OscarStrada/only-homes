import { Button } from './Button';

import { IoBedOutline } from 'react-icons/io5';
import { BiBath } from 'react-icons/bi';
import { FaExpand } from 'react-icons/fa';
import { BsHouseDoor } from 'react-icons/bs';

export const PropertyCard = ({
  image,
  alt,
  title,
  location,
  price,
  numOfBedrooms,
  numOfBathrooms,
  lotSize,
  buildingSize,
  query,
}) => {
  const formatNumber = new Intl.NumberFormat('en-us');

  return (
    <section>
      {/* main container */}
      <div className="md:hover:scale-105 transform transition duration-300 ease-out w-[320px] h-[440px] rounded-xl flex flex-col bg-[#f9f9f9]">
        {/* Top - image */}
        <div className="h-1/2 rounded-xl">
          <img
            className="w-full h-full rounded-t-xl object-cover"
            src={image}
            alt={alt}
          />
        </div>

        {/* Bottom */}
        <div className="p-7 space-y-5">
          <h4 className="text-xl font-semibold">
            {title}, {location}
          </h4>
          {/* characteristic */}
          <div className="flex w-full space-x-8">
            <div className="flex flex-col items-center space-y-2">
              <IoBedOutline />
              <span>{numOfBedrooms}</span>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <BiBath />
              <span>{numOfBathrooms}</span>
            </div>

            <div className="flex flex-col items-center space-y-2">
              <FaExpand />
              <span>{formatNumber.format(lotSize)}</span>
            </div>

            <div className="flex flex-col items-center space-y-2">
              <BsHouseDoor />
              <span>{formatNumber.format(buildingSize)}</span>
            </div>
          </div>
          <div className="flex justify-between items-end pt-4">
            {/* Price */}
            <div className="flex flex-col space-y-2 flex-1">
              <span className="font-inter font-normal uppercase tracking-[0.15em] md:tracking-[0.2em] text-xs">
                Price
              </span>
              <span className="font-medium">
                ${formatNumber.format(price)} USD
              </span>
            </div>
            {/* Button */}
            <div className="w-[100px]">
              <Button
                small
                color={'#ea6c18'}
                textcolor="#ffffff"
                url={`/homes/${query}`}
              >
                Details
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
