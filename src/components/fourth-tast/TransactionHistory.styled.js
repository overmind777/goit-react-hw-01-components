import styled from 'styled-components';

export const Table = styled.table`
  width: 500px;
  margin-top: 50px;
  background-color: white;
`;

export const Thead = styled.thead`
  background-color: lightgreen;
  color: white;

  th {
    padding: 10px;
  }
`;

export const Tbody = styled.tbody`
  text-align: center;
  tr:nth-child(even) {
    background-color: red;
  }
  td {
    padding: 10px;
    text-transform: capitalize;
  }
`;
