import Image from 'next/image';
import { SectionContainer } from '../components/SectionContainer';
import backgroundImage from '@/public/images/roadmap-background.png';

const RoadMap = () => (
  <SectionContainer id="roadmap">
    <div className="inline-block p-4 mb-4 text-white bg-gray-800 bg-opacity-50 rounded-lg">
      <h2 className="inline-block text-6xl font-black">
        Road Map
      </h2>
    </div>
    <ul className="grid grid-cols-1 gap-4 md:grid-cols-2">
      <li className="p-4 border-4 rounded border-cyan-600 min-w-[300px] min-h-[200px] bg-gray-900 bg-opacity-50 text-white">
        <h3 className="mb-4 text-2xl bold">Phase 1</h3>
        <p>
          Occaecat laboris velit officia sint. Id reprehenderit veniam ut exercitation Lorem quis consequat excepteur eiusmod amet voluptate. Dolore magna ex officia qui nulla id culpa.
          <br />
          <br />
          Sint non incididunt non labore enim. Elit aute laborum cillum ullamco aliquip cillum duis mollit dolor ipsum dolore exercitation labore. Qui ut aute veniam adipisicing labore dolore occaecat esse et ut. In elit fugiat consequat minim aliquip voluptate laborum. Nisi sint anim excepteur fugiat deserunt cupidatat consectetur. Aliqua officia mollit esse minim irure eiusmod aliqua. Aute quis cupidatat nulla anim ex.
        </p>
      </li>
      <li className="p-4 border-4 rounded border-cyan-600 min-w-[300px] min-h-[200px] bg-gray-900 bg-opacity-50 text-white">
        <h3 className="mb-4 text-2xl bold">Phase 2</h3>
        <p>
          Commodo veniam officia duis irure sint dolore et tempor in elit dolor non adipisicing ullamco. Deserunt Lorem voluptate esse officia voluptate dolore id. Enim ullamco ut eu dolor aliquip est exercitation fugiat. Dolore laborum veniam ad mollit dolor Lorem tempor.
          <br />
          <br />
          Aute ad adipisicing laborum officia nostrud eiusmod dolore velit ipsum sunt laboris id. Commodo adipisicing veniam ad et ea consequat cillum mollit eiusmod. Elit reprehenderit pariatur enim quis cillum dolore id qui sint. Veniam nostrud reprehenderit aliquip cupidatat amet sint velit consectetur exercitation nostrud ipsum in et.
        </p>
      </li>
      <li className="p-4 border-4 rounded border-cyan-600 min-w-[300px] min-h-[200px] bg-gray-900 bg-opacity-50 text-white">
        <h3 className="mb-4 text-2xl bold">Phase 3</h3>
        <p>
          Sint sint occaecat minim aute occaecat consequat velit. Culpa exercitation et laborum in eu sint Lorem excepteur est et quis. Reprehenderit commodo do reprehenderit veniam enim aute esse aute nisi sit aute minim eiusmod do.
          <br />
          <br />
          Ex enim fugiat magna nisi dolor quis nisi sint. Adipisicing qui dolore tempor esse do est dolor esse exercitation. Fugiat nisi officia irure reprehenderit nisi reprehenderit. Voluptate et veniam mollit incididunt aute do et aliquip dolore elit deserunt nulla ex. Officia irure velit aute elit officia consectetur tempor do consequat occaecat exercitation. Eiusmod velit ea mollit dolor. Sint ea deserunt ea enim non irure in minim dolor fugiat non.
        </p>
      </li>
      <li className="p-4 border-4 rounded border-cyan-600 min-w-[300px] min-h-[200px] bg-gray-900 bg-opacity-50 text-white">
        <h3 className="mb-4 text-2xl bold">Phase 4</h3>
        <p>
          Pariatur enim minim duis non qui. Aliqua dolor nisi elit id non sit ea irure. Nisi occaecat esse ea eiusmod nostrud qui consequat. Excepteur reprehenderit nulla deserunt ullamco quis esse labore esse sint officia pariatur. Proident ea irure velit qui ut esse quis enim ipsum.
          <br />
          <br />
          Ea nisi aliquip commodo commodo ad nulla cillum incididunt ex sit in esse fugiat magna. Aliqua cillum do quis reprehenderit officia enim cupidatat do et eiusmod. Occaecat amet ea esse et labore elit fugiat occaecat. Laboris sunt aliqua tempor cupidatat eiusmod sit. Lorem nulla veniam enim ea culpa eu occaecat.
        </p>
      </li>
    </ul>

    <div className="absolute inset-0 z-[-1] w-full min-h-screen overflow-hidden">
      <Image
        src={backgroundImage}
        alt="Roadmap Background"
        priority
        layout="fill"
        objectFit="cover"
        quality={100}
      />
    </div>

  </SectionContainer>
);

export { RoadMap };
