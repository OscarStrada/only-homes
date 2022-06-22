import { Button } from '../../components/Button';
import { Title } from '../../components/Title';

export const BlogBanner = () => {
  return (
    <section className="relative px-20 h-[530px]">
      <div className="relative w-full h-[530px]">
        <img
          className="w-full h-full"
          src="/images/tulum.jpg"
          alt="Tulum México cenote"
        />
        <div
          className="absolute top-0 left-0 w-full h-full bg-[#061D3A] 
        opacity-[0.45]"
        ></div>
        <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center space-y-16">
          <Title
            title={'A place to find peace of mind'}
            subtitle={'tulum mexico'}
            isForWhiteBackground
          />
          <div className="w-[220px] md:w-[200px]">
            <Button color={'white'} textColor="#061D3A">
              Contact Us
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
