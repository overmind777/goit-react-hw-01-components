import { Wrapper, ListWrapper, ItemWrapper } from './Statistics.styled.js';

export const Statistics = props => {
  const { title, stats } = props;
  const generateRandomColor = () => {
    return `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(
      Math.random() * 256
    )}, ${Math.floor(Math.random() * 256)})`;
  };

  return (
    <Wrapper>
      {title ? <h2>{title}</h2> : null}

      <ListWrapper>
        {stats.map(el => {
          return (
            <ItemWrapper
              className="item"
              key={el.id}
              style={{ backgroundColor: generateRandomColor() }}
            >
              <span className="label">{el.label}</span>
              <span className="percentage">{el.percentage} %</span>
            </ItemWrapper>
          );
        })}
      </ListWrapper>
    </Wrapper>
  );
};
