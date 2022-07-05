import { IoBedOutline } from 'react-icons/io5';
import { BiBath } from 'react-icons/bi';
import { FaExpand } from 'react-icons/fa';
import { BsHouseDoor } from 'react-icons/bs';
import { Button } from './Button';

export const CardProperty = ({
  image,
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
    <div className="bg-gray-100 w-full rounded-xl md:hover:scale-105 transform transition duration-300 ease-out">
      {/* Image */}
      <div className="w-full h-[280px]">
        <img
          className={'rounded-t-xl w-full h-full object-cover'}
          src={image}
          alt=""
        />
      </div>
      {/* Content */}
      <div className="p-7 space-y-5">
        <div>
          <h3 className="text-xl font-semibold">
            {title}, {location}
          </h3>
        </div>
        {/* Characteristics */}
        <div className="flex w-full space-x-8 pb-5">
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

        <div className="flex justify-between">
          <div className="flex flex-col space-y-2">
            <p className="font-inter font-normal uppercase tracking-[0.15em] md:tracking-[0.2em] text-xs">
              Price
            </p>
            <span className="font-medium">
              ${formatNumber.format(price)} USD
            </span>
          </div>
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
  );
};
