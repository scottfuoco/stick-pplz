import Link from 'next/link';
import { FaDiscord, FaTwitter, FaInstagram } from 'react-icons/fa';

const MintNav = () => (
  <nav className="fixed z-20 flex items-center justify-between w-full gap-8 px-8 py-2 bg-blue-600">
    <ul className="flex items-center gap-8 p-2 text-4xl font-bold">
      <li>
        <Link href="/">
          <a className="text-4xl font-bold link-underline">
            Suit Gang
          </a>
        </Link>
      </li>
    </ul>

    <div className="flex gap-4 text-4xl">
      <FaDiscord />
      <FaTwitter />
      <FaInstagram />
    </div>
  </nav>
);

export { MintNav };
