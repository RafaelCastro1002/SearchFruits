import styled from "styled-components";

export const Container = styled.div`
  margin: auto;
  width: 50vw;
  padding: 30px 30px;
  margin-top: 3em;
  box-shadow: 0px 2px 3px grey;
  border-radius: ${({ theme }) => theme.styles.borderRadius};
  min-height: 30vh;
`;
