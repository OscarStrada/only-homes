import { Button } from '../components/Button';
import { BsWhatsapp, BsInstagram } from 'react-icons/bs';
import { Link } from 'react-router-dom';

export const ContactForm = ({ image, name, color }) => {
  return (
    <div>
      <div className="h-[600px] border-[1px] border-gray-100 rounded-xl p-5 md:p-10 flex flex-col space-y-14">
        {/* Top */}
        <div className="w-full flex space-x-8 items-center">
          <div className="rounded-full w-28 h-28 bg-gray-100">
            <img
              className={'w-full h-full rounded-full object-cover'}
              src={image}
              alt={'Agent photo'}
            />
          </div>
          <div className="w-full h-full flex-1 flex flex-col space-y-2">
            {/* Location */}
            <p
              className="font-inter font-normal uppercase tracking-[0.15em] 
                    md:tracking-[0.2em] text-xs"
            >
              Tulum, México
            </p>
            {/* Name */}
            <h3 className="text-xl font-medium">{name}</h3>
            {/* Social icons */}
            <div className="flex items-end space-x-2 flex-1">
              <Link to={'/'}>
                <div className="rounded-full w-10 h-10 bg-gray-100 flex items-center justify-center">
                  <BsWhatsapp />
                </div>
              </Link>
              <Link to={'/'}>
                <div className="rounded-full w-10 h-10 bg-gray-100 flex items-center justify-center">
                  <BsInstagram />
                </div>
              </Link>
            </div>
          </div>
        </div>
        <div className="flex flex-col w-full flex-1 space-y-10">
          <div className="flex-1 flex flex-col justify-between">
            <div className="space-y-2">
              <span className="font-semibold text-sm">Name</span>
              <div className="w-full border-[1px] border-gray-100 rounded-md">
                <input
                  type="name"
                  placeholder="Name"
                  className="w-full px-3 py-2 text-sm font-light"
                />
              </div>
            </div>

            <div className="space-y-2">
              <span className="font-semibold text-sm">Email</span>
              <div className="w-full border-[1px] border-gray-100 rounded-md">
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full px-3 py-2 text-sm font-light"
                />
              </div>
            </div>

            <div className="space-y-2">
              <span className="font-semibold text-sm">Phone</span>
              <div className="w-full border-[1px] border-gray-100 rounded-md">
                <input
                  type="phone"
                  placeholder="Phone"
                  className="w-full px-3 py-2 text-sm font-light"
                />
              </div>
            </div>
          </div>
          <div>
            <Button url={'/contact'} color={color} textcolor="#ffffff" medium>
              Send
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
