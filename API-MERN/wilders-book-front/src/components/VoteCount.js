import React from "react";
import styled from "styled-components";

const StyledVoteCount = styled.span`
  /* Center the content */
  align-items: center;
  display: flex;
  justify-content: center;

  /* Colors */
  background-color: ${({ count }) => (count >= 10 ? "#00bcd4" : "#ff1744")};
  color: #fff;

  /* Rounded border */
  border-radius: 9999px;
  height: 20px;
  width: 20px;
`;

const VoteCount = ({ count }) => {
  return <StyledVoteCount count={count}>{count}</StyledVoteCount>;
};
export default VoteCount;
