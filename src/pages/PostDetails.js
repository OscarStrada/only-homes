import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Hero } from '../components/Hero';
import { urlFor, client } from '../client';
import { Footer } from '../components/Footer';

export const PostDetails = () => {
  const [blogPost, setBlogPost] = useState(null);
  const { slug } = useParams();
  console.log(slug);
  console.log('blogpost = ', blogPost);

  useEffect(() => {
    const query = `*[slug.current == "${slug}"]`;

    client.fetch(query).then((data) => {
      setBlogPost(data);
    });
  }, []);

  return (
    <div>
      {blogPost?.map(({ _id, title, mainImage, publishedAt, description }) => (
        <div key={_id}>
          {/* banner */}
          <div className="relative w-full h-[700px]">
            <Hero source={urlFor(mainImage)} />
            <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
            <div className="absolute top-0 left-0 w-full h-full px-10 md:px-32 flex flex-col justify-center items-center text-white text-center space-y-7">
              <span>{publishedAt}</span>
              <h1 className="text-4xl md:text-6xl leading-snug font-semibold">
                {title}
              </h1>
            </div>
          </div>
          {/* body */}
          <div className="relative w-full px-5 md:px-20 h-[2000px]">
            <div className="-mt-24 p-7 leading-loose md:px-20 md:py-16 w-full h-full bg-white rounded-xl">
              <p>{description}</p>
            </div>
          </div>
        </div>
      ))}
      <Footer />
    </div>
  );
};
