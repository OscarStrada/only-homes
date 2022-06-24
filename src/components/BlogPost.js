import { LabelPost } from './LabelPost';

export const BlogPost = ({ date, image, title, alt, id }) => {
  return (
    <div className="flex space-x-7">
      <div className="w-32 h-32">
        <img
          className="w-full h-full rounded-md object-cover"
          src={image}
          alt={alt}
        />
      </div>
      <div className="space-y-4">
        <div className="md:w-[155px]">
          <LabelPost date={date} />
        </div>
        <h4 className="text-lg font-semibold text-[#061D3A]">{title}</h4>
      </div>
    </div>
  );
};
