import styled from 'styled-components';

export const StyledProfile = styled.div`
  width: 50vw;
  display: flex;
  flex-direction: column;
  justify-content: center;

  /* background-color: gray; */

  border-radius: 10px;
  background-color: white;
`;

export const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin: 0 auto;
  padding: 20px;

  .name {
    font-size: 20px;
    font-weight: bold;
  }
  .tag,
  .location {
    color: gray;
  }
`;

export const StyledImg = styled.img`
  display: block;
  border-radius: 50%;
  width: 100px;
  height: 100px;
`;

export const StyledList = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  justify-content: center;
  padding: 0;

  background-color: lightgray;
  list-style: none;

  .label {
    color: gray;
  }
`;

export const StyledItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid gray;
  .quantity {
    color: black;
    font-weight: bold;
  }
`;
