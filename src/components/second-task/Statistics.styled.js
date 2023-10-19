import styled from 'styled-components';

export const Wrapper = styled.div`
  display: block;
  text-align: center;

  background-color: white;

  .ishidden {
    display: none;
  }
`;

export const ListWrapper = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  margin: 0;
  padding: 0 10px;

  list-style: none;
`;

export const ItemWrapper = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
`;
