import React from 'react';
import { Button } from '../../components/Button';
import { LabelPost } from '../../components/LabelPost';

export const BlogSection = () => {
  return (
    <section className="w-full flex justify-center md:-mt-16 md:px-40">
      <div className="w-full bg-white rounded-2xl md:p-[50px]">
        <div className="flex">
          {/* Left */}
          <div className="relative">
            <img
              className="w-[550px] h-[580px] md:rounded-2xl"
              src="/images/tuluminvest/3.jpg"
              alt=""
            />
            <div className="absolute md:-bottom-32 md:left-[calc(50%-235px)]">
              <div className="md:w-[155px] absolute -top-5 left-9">
                <LabelPost text={'April 18, 2021'} />
              </div>
              <div className="md:w-[470px] bg-white px-9 py-12 rounded-xl shadow-3xl space-y-7">
                <h4 className="text-2xl font-semibold text-[#061D3A]">
                  What will website be like in 100 years?
                </h4>
                <p className="text-gray-500 leading-relaxed">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Tempora molestiae provident, qui eum dolores mollitia nulla.
                </p>
                <div className="md:w-48">
                  <Button
                    medium
                    color={'#657048'}
                    textcolor={'white'}
                    url={'/'}
                  >
                    Read more
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Right */}
        </div>
      </div>
    </section>
  );
};
