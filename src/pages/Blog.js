import { NavbarFixed } from '../components/NavbarFixed';
import { Footer } from '../components/Footer';
import { CardPost } from '../components/CardPost';
import { Title } from '../components/Title';
import { posts } from '../data/db';

export const Blog = () => {
  return (
    <div>
      <NavbarFixed />
      <div className="px-[25px] md:px-20 pt-32 pb-14 md:pt-40">
        <Title title={'Browse our Journal'} subtitle={'Recent posts'} isLeft />
        <div className="w-full grid md:grid-cols-3 gap-x-10 gap-y-12 py-16">
          {posts?.map(({ title, date, id, url, alt, description }) => (
            <CardPost
              title={title}
              image={`${url}/${id}.jpg`}
              alt={alt}
              key={id}
              description={description}
            />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};
