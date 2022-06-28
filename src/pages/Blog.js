import { useEffect, useState } from 'react';
import { NavbarFixed } from '../components/NavbarFixed';
import { Footer } from '../components/Footer';
import { CardPost } from '../components/CardPost';
import { Title } from '../components/Title';

import { urlFor, client } from '../client';

export const Blog = () => {
  const [blogPosts, setBlogPosts] = useState(null);

  useEffect(() => {
    const query = '*[_type == "post"]';

    client.fetch(query).then((data) => {
      setBlogPosts(data);
    });
  }, []);

  return (
    <div>
      <NavbarFixed />
      <div className="px-[25px] md:px-20 pt-32 pb-14 md:pt-40">
        <Title title={'Browse our Journal'} subtitle={'Recent posts'} isLeft />
        <div className="w-full grid md:grid-cols-3 gap-x-10 gap-y-12 py-16">
          {blogPosts?.map(
            ({ title, mainImage, publishedAt, alt, description }) => (
              <CardPost
                title={title}
                image={urlFor(mainImage)}
                alt={alt}
                key={title}
                description={description}
                date={publishedAt}
              />
            ),
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};
