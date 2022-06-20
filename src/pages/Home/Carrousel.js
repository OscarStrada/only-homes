import { SliderCard } from '../../components/SliderCard';
import { Title } from '../../components/Title';
import { slider } from '../../data/db';

export const Carrousel = () => {
  return (
    <>
      <div className="w-full h-[937px] bg-plants overflow-hidden">
        <div className="w-full h-full px-[25px] md:px-20 py-[60px] md:py-[140px] flex flex-col justify-center">
          <Title title={'Listing Properties'} subtitle={'Featured houses'} />

          <div className="flex flex-wrap w-full h-full my-9 md:my-16">
            <div className="flex space-x-10">
              {slider?.map(({ bgcolor }) => (
                <SliderCard key={bgcolor} color={bgcolor} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
