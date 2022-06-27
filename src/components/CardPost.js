import { Button } from '../components/Button';

export const CardPost = ({
  image,
  alt,
  title,
  location,
  description,
  price,
}) => {
  return (
    <section>
      {/* Container */}
      <div className="flex flex-col rounded-lg bg-[#fafafa]">
        {/* Top */}
        <div className="w-full h-[275px] rounded-t-lg">
          <img
            src={image}
            alt={alt}
            className="rounded-t-lg object-cover w-full h-full"
          />
        </div>
        {/* Bottom */}
        <div className="p-7 md:p-10 space-y-7">
          <h2 className="text-xl font-semibold">{title}</h2>
          <p className="text-sm font-light leading-relaxed">{description}</p>
          <div className="w-[180px] pt-7">
            <Button url={'/'} medium color="#657048" textcolor="#ffffff">
              Read more
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
