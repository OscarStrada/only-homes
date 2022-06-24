import { LabelPost } from './LabelPost';

export const BlogPost = (date, image, title, alt) => {
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
        <LabelPost date={date} />
        <h4 className="text-lg font-semibold">{title}</h4>
      </div>
    </div>
  );
};
