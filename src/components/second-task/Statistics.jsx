import { Wrapper, ListWrapper, ItemWrapper } from './Statistics.styled.js';

export const Statistics = props => {
  const { title, stats } = props;

  return (
    <Wrapper>
      {title && <h2>{title}</h2>}

      <ListWrapper>
        {stats.map(el => {
          return (
            <ItemWrapper className="item" key={el.id} id={el.id}>
              <span className="label">{el.label}</span>
              <span className="percentage">{el.percentage} %</span>
            </ItemWrapper>
          );
        })}
      </ListWrapper>
    </Wrapper>
  );
};
