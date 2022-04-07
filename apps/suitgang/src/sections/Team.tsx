import Image from 'next/image';
import { SectionContainer } from '../components/SectionContainer';
import { TeamMemberCard } from '../components/TeamMemberCard';
import backgroundImage from '@/public/images/team-background.png';
import { teamData } from '@/data/team';

const Team = () => (
  <SectionContainer id="team">
    <div className="inline-block p-4 mb-4 text-white bg-gray-800 bg-opacity-50 rounded-lg">
      <h2 className="inline-block text-6xl font-black">
        The Team
      </h2>
    </div>

    <ul className="grid gap-4 place-items-center md:grid-cols-3">
      {teamData.members.map((teamMember) => (
        <TeamMemberCard key={teamMember.name} name={teamMember.name} image={teamMember.image}>
          {teamMember.description}
        </TeamMemberCard>
      ))}
    </ul>

    <div className="absolute inset-0 z-[-1] w-full min-h-screen overflow-hidden">
      <Image
        src={backgroundImage}
        alt="Team Background"
        priority
        layout="fill"
        objectFit="cover"
        quality={100}
      />
    </div>
  </SectionContainer>
);

export { Team };
