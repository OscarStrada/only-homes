import { SliderCard } from '../../components/SliderCard';
import { slider } from '../../data/db';

export const Carrousel = () => {
  return (
    <>
      <div className="w-full h-[937px] bg-plants overflow-hidden">
        <div className="relative md:left-20 w-full md:w-[calc(100vw-80px)] h-full py-[60px] md:py-[140px] flex justify-center">
          <div className="text-center">
            <p className="font-inter font-normal uppercase tracking-[0.15em] md:tracking-[0.2em] text-xs">
              Featured houses
            </p>
            <h2 className="text-4xl md:text-[48px] font-semibold text-[#061D3A] pt-4">
              Listing Properties
            </h2>
            <div className="overflow-scroll scrollbar-hide flex w-full h-full my-9 md:my-16">
              <div className="flex space-x-3">
                {slider?.map(({ bgcolor }) => (
                  <SliderCard key={bgcolor} color={bgcolor} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
