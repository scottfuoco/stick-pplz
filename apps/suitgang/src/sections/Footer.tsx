import { getYear } from 'date-fns';
import { FaDiscord, FaInstagram, FaTwitter } from 'react-icons/fa';

const Footer = () => (
  <section className="h-[56px] w-full bg-blue-600 flex justify-between items-center p-4">
    <span className="text-white">
      {`Copyright Suit Gang ${getYear(Date.now())}`}
    </span>
    <div>
      <h3 className="text-3xl font-bold text-white">
        -- -- ** SUIT GANG ** -- --
      </h3>
    </div>

    <div className="flex gap-4 text-4xl">
      <FaDiscord />
      <FaTwitter />
      <FaInstagram />
    </div>
  </section>
);

export { Footer };
