import Skill from "./Skill";
import blank_profile from "../assets/blank_profile.jpg";
import styled from "styled-components";

const Container = styled.div`
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
  padding: 24px;
  display: grid;
  grid-template-columns: repeat(3, 50%);
  justify-content: center;
`;

const Wilder = ({ name, skills }) => {
  return (
    <Container>
      <div className="wilder">
        <article className="card">
          <img src={blank_profile} alt="wilder Profile" />
          <h3>{name}</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <h4>Wild Skills</h4>
          <ul className="skills">
            {skills.map((skill) => (
              <Skill
                key={skill.title}
                title={skill.title}
                voteCount={skill.voteCount}
              />
            ))}
          </ul>
        </article>
      </div>
    </Container>
  );
};
export default Wilder;
