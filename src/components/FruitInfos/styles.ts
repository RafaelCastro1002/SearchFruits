import styled from "styled-components";

export const InfoTable = styled.table`
  margin: auto;
  caption-side: top;

  thead {
    background-color: ${({ theme }) => theme.colors.blue300};
    color: white;
    padding: 10px 10px;
  }

  th {
    padding: 10px;
    margin: none;
    border: none;
  }

  tr {
    border: none;
    padding: 5px 10px;
  }

  td {
    padding: 5px 10px;
    min-width: 50px;
    max-width: 130px;
    background-color: ${({ theme }) => theme.colors.blueLight};
  }
`;
