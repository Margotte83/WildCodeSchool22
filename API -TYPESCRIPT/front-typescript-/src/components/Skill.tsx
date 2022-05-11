/* eslint-disable react/react-in-jsx-scope */
// eslint-disable-next-line import/no-extraneous-dependencies
import Proptypes from 'prop-types';

type SkillProps = {
  title: string;
  votes: number;
};

function Skill({ title, votes }: SkillProps): React.ReactElement {
  return (
    <li>
      {title}
      <span className="votes">{votes}</span>
    </li>
  );
}
Skill.propTypes = {
  title: Proptypes.string.isRequired,
  votes: Proptypes.number.isRequired,
};
export default Skill;
/* eslint-disable react/react-in-jsx-scope */