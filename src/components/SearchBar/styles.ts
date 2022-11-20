import styled from "styled-components";

export const Container = styled.div`
  width: 40%;
  display: flex;
  margin: auto;
`;

export const Input = styled.input`
  border: 1px solid grey;
  padding: 10px;
  font-size: 100%;
  width: 100%;
  border: 1px solid ${({ theme }) => theme.colors.blue};
  border-radius: ${({ theme }) => theme.styles.borderRadius};
  color: #1c1c1c;
`;

export const SearchButton = styled.button`
  margin-left: 10px;
  border: none;
  width: 40px;
  padding: 10px;
  border-radius: ${({ theme }) => theme.styles.borderRadius};
  background-color: ${({ theme }) => theme.colors.blue300};
  cursor: pointer;
`;

export const CardSelect = styled.div`
  width: 200px;
  display: flex;
  flex-direction: column;
  margin-left: 20px;
`;

export const LabelSelect = styled.span`
  color: grey;
`;

export const Select = styled.select`
  border: 1px solid ${({ theme }) => theme.colors.blue};
  background-color: #fff;
  border-radius: ${({ theme }) => theme.styles.borderRadius};
  width: 100%;
`;

export const SelectOption = styled.option`
  font-size: 100%;
  color: ${({ theme }) => theme.colors.ciano};
  font-family: "bold";
`;
