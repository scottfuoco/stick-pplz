import Link from 'next/link';
import { FaDiscord, FaTwitter, FaInstagram } from 'react-icons/fa';

const Nav = () => {
  const scrollToRef = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="fixed z-20 flex items-center justify-between w-full gap-8 px-8 py-2 bg-blue-600">
      <ul className="flex items-center gap-8 text-4xl font-bold">
        <li>
          <button className="text-4xl font-bold link-underline" type="button" onClick={() => scrollToRef('hero')}>
            Hero
          </button>
        </li>
        <li>
          <button className="text-4xl font-bold link-underline " type="button" onClick={() => scrollToRef('team')}>
            Team
          </button>
        </li>
        <li>
          <button className="text-4xl font-bold link-underline " type="button" onClick={() => scrollToRef('strategy')}>
            Strategy
          </button>
        </li>
        <li>
          <button className="text-4xl font-bold link-underline" type="button" onClick={() => scrollToRef('roadmap')}>
            Roadmap
          </button>
        </li>
        <li>
          <button className="text-4xl font-bold link-underline" type="button" onClick={() => scrollToRef('faq')}>
            FAQ
          </button>
        </li>
        <li>
          <Link href="/mint">
            <a className="block p-2 text-4xl font-bold bg-green-500 hover:bg-cyan-500 rounded-xl" type="button">
              MINT
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
};

export { Nav };
