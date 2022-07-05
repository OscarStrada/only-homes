import { NavbarFixed } from '../components/NavbarFixed';
import { ContactForm } from '../components/ContactForm';
import { Footer } from '../components/Footer';

export const Contact = () => {
  const imagePath = '../images/logoBlack.png';
  return (
    <div>
      <NavbarFixed />
      <div className="py-40 px-[25px] md:px-28">
        <ContactForm
          image={imagePath}
          name={'Only Homes Tulum'}
          color={'#657048'}
        />
      </div>
      <Footer />
    </div>
  );
};
