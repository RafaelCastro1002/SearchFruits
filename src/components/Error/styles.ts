import styled from "styled-components";

export const Container = styled.div`
  background-color: #db2a2a;
  padding: 10px 20px;
  border-radius: ${({ theme }) => theme.styles.borderRadius};
  margin: 20px auto;
`;

export const TextArea = styled.span`
  color: white;
  font-style: italic;
  font-weight: bold;
`;
