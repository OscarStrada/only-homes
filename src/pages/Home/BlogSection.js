import { useEffect, useState } from 'react';
import { BlogPost } from '../../components/BlogPost';
import { Button } from '../../components/Button';
import { LabelPost } from '../../components/LabelPost';

import { urlFor, client } from '../../client';

export const BlogSection = () => {
  const [blogPosts, setBlogPosts] = useState(null);

  useEffect(() => {
    const query = '*[_type == "post"]';

    client.fetch(query).then((data) => {
      const filterPosts = data.filter((post) => post.featured === true);
      setBlogPosts(filterPosts);
    });
  }, []);

  return (
    <section className="w-full flex justify-center md:-mt-16 px-5 md:px-20 pb-[180px]">
      <div className="w-full bg-white rounded-2xl md:p-[50px] flex flex-col md:flex-row">
        {/* Left */}
        <div className="relative">
          <img
            className="w-[550px] h-[500px] md:h-[580px] md:rounded-2xl"
            src="/images/tuluminvest/3.jpg"
            alt=""
          />
          <div className="relative md:absolute md:-bottom-16 md:left-[calc(50%-235px)]">
            <div className="md:w-[155px] absolute -top-5 left-9">
              <LabelPost date={'April 18, 2021'} />
            </div>
            <div className="md:w-[470px] bg-white px-9 py-12 rounded-xl shadow-3xl space-y-7">
              <h4 className="text-2xl font-semibold text-[#061D3A]">
                What you should investing in Tulum this 2023?
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
        <div className="flex-1 md:pl-[65px] space-y-10 mt-16 md:mt-0">
          <h4 className="font-inter font-normal uppercase tracking-[0.15em] md:tracking-[0.2em] text-xs text-gray-500">
            Popular posts
          </h4>
          <div className="md:pt-0 space-y-10">
            {blogPosts?.map(({ title, mainImage, alt, publishedAt, slug }) => (
              <BlogPost
                title={title}
                image={urlFor(mainImage)}
                alt={alt}
                date={publishedAt}
                key={title}
                query={slug.current}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
