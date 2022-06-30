import { Button } from '../components/Button';

export const CardPost = ({ image, alt, title, description, query }) => {
  return (
    <section>
      {/* Container */}
      <div className="flex flex-col rounded-lg bg-[#fafafa] md:hover:scale-105 transform transition duration-300 ease-out">
        {/* Top */}
        <div className="w-full h-[260px] rounded-t-lg">
          <img
            src={image}
            alt={alt}
            className="rounded-t-lg object-cover w-full h-full"
          />
        </div>
        {/* Bottom */}
        <div className="min-h-[300px] relative p-7 md:p-10 flex flex-col">
          <div className="flex-1 space-y-5">
            <h2 className="text-xl font-semibold">{title}</h2>
            <p className="text-sm font-light leading-relaxed">{description}</p>
          </div>
          <div className="w-[140px]">
            <Button
              url={`/blog/${query}`}
              small
              color="#657048"
              textcolor="#ffffff"
            >
              Read more
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
