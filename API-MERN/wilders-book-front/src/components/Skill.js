import React from "react";
import Proptypes from "prop-types";
import VoteCount from "./VoteCount";

//proptypes est une fonction qui permet de définir les types de données
const Skill = ({ title, voteCount }) => (
  <li>
    {title}
    <VoteCount count={voteCount} />
  </li>
);
Skill.propTypes = {
  name: Proptypes.string.isRequired, // on définit le type de données que l'on attend
  voteCount: Proptypes.number.isRequired,
};

export default Skill;
