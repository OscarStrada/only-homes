import { LabelPost } from './LabelPost';

export const BlogPost = ({ date, image, title, alt, id }) => {
  return (
    <div className="flex flex-col md:flex-row md:space-y-0 md:space-x-7 pb-7 md:p-3 rounded-lg hover:shadow-xl hover:scale-105 transform transition duration-300 ease-out">
      <div className="w-full h-72 md:w-32 md:h-32">
        <img
          className="w-full h-full rounded-md object-cover"
          src={image}
          alt={alt}
        />
      </div>
      <div className="space-y-4 -mt-5 pl-5 md:-mt-0 md:pl-0 flex-1">
        <div className="w-1/2 md:w-[155px]">
          <LabelPost date={date} />
        </div>
        <h4 className="text-lg font-semibold text-[#061D3A]">{title}</h4>
      </div>
    </div>
  );
};
