export const Slider = () => {
  return (
    <>
      <div className="flex w-full md:w-[500px] h-[140px] bg-white rounded-tl-md">
        {/* left */}
        <div className="w-[75px] h-full flex flex-col justify-center items-center space-y-12">
          <img
            src="/arrow-right.svg"
            alt="arrow right"
            className="cursor-pointer"
          />
          <img
            src="/arrow-left.svg"
            alt="arrow left"
            className="cursor-pointer"
          />
        </div>
        {/* middle */}
        <div className="flex flex-col flex-1 h-full bg-[#FAFBF9] px-[35px] justify-center items-start space-y-3">
          <span className="text-[22px] font-medium text-[#061D3A]">
            Kalomthe, Tulum
          </span>
          <p className="font-inter text-xs font-light text-[#061D3A] tracking-[0.2em] uppercase">
            for sale $550,000 USD
          </p>
        </div>
        {/* right */}
        <div className="w-[80px] h-full hidden md:flex justify-center items-center">
          <img src="/chevron-right.svg" alt="chevron icon" />
        </div>
      </div>
    </>
  );
};
