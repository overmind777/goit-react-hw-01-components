import styled from 'styled-components';

export const Wrapper = styled.div`
  display: block;
  margin-top: 50px;
`;

export const ListWrapper = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin: 0;
  padding: 0 30px;

  background-color: white;
`;

export const ItemWrapper = styled.li`
  display: flex;

  gap: 10px;
  padding: 5px 10px;
  border-radius: 10px;
  box-shadow: 3px 3px 5px 5px gray;

  span {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    margin: auto 0;
  }

  .online {
    background-color: green;
  }

  .offline {
    background-color: red;
  }
`;
