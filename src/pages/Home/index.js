import { Banner } from './Banner';
import { BlogBanner } from './BlogBanner';
import { Carrousel } from './Carrousel';

export const Home = () => {
  return (
    <div className="h-[5000px] bg-white">
      <Banner />
      <Carrousel />
      <BlogBanner />
    </div>
  );
};
