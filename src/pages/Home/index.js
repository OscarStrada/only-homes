import { Banner } from './Banner';
import { BlogBanner } from './BlogBanner';
import { BlogSection } from './BlogSection';
import { Carrousel } from './Carrousel';
import { InvestInTulum } from './InvestInTulum';

export const Home = () => {
  return (
    <div className="h-[5000px] bg-white">
      <Banner />
      <Carrousel />
      <BlogBanner />
      <InvestInTulum />
      <BlogSection />
    </div>
  );
};
