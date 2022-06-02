import { ScrollBar } from '../../components/ScrollBar';
import { Banner } from './Banner';

export const Home = () => {
  return (
    <div className="h-[5000px] bg-white">
      <ScrollBar />
      <Banner />
    </div>
  );
};
