type WilderProps = {
  city: string;
  justAdded: boolean;
  name: string;
  skills: SkillProps[];
};

type SkillProps = {
  title: string;
  votes: number;
  _id: number;
};
