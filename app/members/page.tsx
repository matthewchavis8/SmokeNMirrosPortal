import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const people = [
  {
    id: 'person-1',
    name: 'Geoffrey Oltmans',
    role: 'Dev Manager',
    avatar: 'KingBoo.webp',
  },
  {
    id: 'person-2',
    name: 'Jordan Cox',
    role: 'Scrum Master',
    avatar: 'Ludwig.png',
  },
  {
    id: 'person-3',
    name: 'Francis Kimani',
    role: 'Product Owner',
    avatar: 'KingBobomb.webp',
  },
  {
    id: 'person-4',
    name: 'Kurt Brunton',
    role: 'Dev Team',
    avatar: 'Nabbit.webp',
  },
  {
    id: 'person-5',
    name: 'Forrest Evans',
    role: 'Dev Team',
    avatar: 'Skeleton.jpg',
  },
  {
    id: 'person-6',
    name: 'Josiah Wheat',
    role: 'Dev Team',
    avatar: 'BowserJunior.png',
  },
  {
    id: 'person-7',
    name: 'Deidre Diei',
    role: 'DVT',
    avatar: 'Birdo.png',
  },
  {
    id: 'person-8',
    name: 'You',
    role: 'Co-Op',
    avatar: 'Mario.png',
  },
];

const members = () => {
  return (
    <section className="py-32">
      <div className="container flex flex-col items-center text-center">
        <h2 className="my-6 text-pretty text-2xl font-bold lg:text-4xl">
          Meet Team Smoke & Mirrors
        </h2>
        <p className="mb-8 max-w-3xl text-muted-foreground lg:text-xl">
          You will have fun and you will learn a lot this is a fantastic group
          - Matthew Chavis
        </p>
      </div>
      <div className="container mt-16 grid gap-x-8 gap-y-16 md:grid-cols-2 lg:grid-cols-4">
        {people.map((person) => (
          <div key={person.id} className="flex flex-col items-center">
            <Avatar className="mb-4 size-20 border md:mb-5 lg:size-24">
              <AvatarImage src={person.avatar} />
              <AvatarFallback>{person.name}</AvatarFallback>
            </Avatar>
            <p className="text-center font-medium">{person.name}</p>
            <p className="text-center text-muted-foreground">{person.role}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default members;
