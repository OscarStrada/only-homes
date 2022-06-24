import React from 'react';
import { BlogPost } from '../../components/BlogPost';
import { Button } from '../../components/Button';
import { LabelPost } from '../../components/LabelPost';
import { posts } from '../../data/db';

export const BlogSection = () => {
  return (
    <section className="w-full flex justify-center md:-mt-16 px-5 md:px-20">
      <div className="w-full bg-white rounded-2xl md:p-[50px] flex">
        {/* Left */}
        <div className="relative">
          <img
            className="w-[550px] h-[500px] md:h-[580px] md:rounded-2xl"
            src="/images/tuluminvest/3.jpg"
            alt=""
          />
          <div className="absolute md:-bottom-32 md:left-[calc(50%-235px)]">
            <div className="md:w-[155px] absolute -top-5 left-9">
              <LabelPost date={'April 18, 2021'} />
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
                <Button medium color={'#657048'} textcolor={'white'} url={'/'}>
                  Read more
                </Button>
              </div>
            </div>
          </div>
        </div>
        {/* Right */}
        <div className="flex-1 pl-[65px] space-y-10">
          <h4 className="font-inter font-normal uppercase tracking-[0.15em] md:tracking-[0.2em] text-xs text-gray-500">
            Popular posts
          </h4>
          <div className="space-y-10">
            {posts?.map(({ title, url, alt, date, id }) => (
              <BlogPost
                title={title}
                image={`${url}/${id}.jpg`}
                alt={alt}
                date={date}
                key={id}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
