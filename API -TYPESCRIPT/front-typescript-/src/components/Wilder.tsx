/* eslint-disable react/react-in-jsx-scope */
import logo from '../logo.jpg';
import Skill from './Skill';

type WilderProps = {
  city: string;
  name: string;
  skills: SkillProps[];
};

type SkillProps = {
  title: string;
  votes: number;
  _id: number;
};

function Wilder({ city, name, skills }: WilderProps): React.ReactElement {
  return (
    <div className="col-lg-3">
      <div className="card mb-3">
        <img src={logo} className="card-img-top" alt="logo" />
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">{city}</p>

          <p className="card-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            imperdiet bibendum dui sed rhoncus. Phasellus ac purus at lectus
            viverra volutpat.
          </p>
          <p className="card-text">
            <span>Wild Skills</span>
          </p>
          <ul>
            {/* On va utiliser la fonction map pour parcourir le tableau de skills */}
            {skills.map((skill) => (
              <Skill key={skill._id} title={skill.title} votes={skill.votes} />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
export default Wilder;
