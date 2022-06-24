import { Footer } from '../../components/Footer';
import { Banner } from './Banner';
import { BlogBanner } from './BlogBanner';
import { BlogSection } from './BlogSection';
import { Carrousel } from './Carrousel';
import { InvestInTulum } from './InvestInTulum';

export const Home = () => {
  return (
    <div>
      <Banner />
      <Carrousel />
      <BlogBanner />
      <InvestInTulum />
      <BlogSection />
      <Footer />
    </div>
  );
};
