import Image from 'next/image';
import React from 'react';
import { FaTwitter } from 'react-icons/fa';

type Props = {
  name: string;
  // eslint-disable-next-line
  image: StaticImageData;
  children: React.ReactNode;
  key: string;

}

const TeamMemberCard = ({
  key, name, image, children,
}: Props) => (
  <li key={key} className="border-4 rounded border-green-400 min-w-[400px] min-h-[200px] bg-gray-800 bg-opacity-50">
    <div className="grid content-center gap-2 p-4 text-center rounded  min-w-[400px] min-h-[200px]">
      <h3 className="text-3xl font-bold text-white">{name}</h3>
      <div>
        <Image
          height={200}
          width={200}
          src={image}
        />
      </div>
      <div className="text-white">
        {children}
      </div>

    </div>
    <div className="flex justify-end px-4 py-2 bg-green-400">
      <FaTwitter />
    </div>
  </li>
);

export { TeamMemberCard };
