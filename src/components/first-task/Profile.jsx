import {
  StyledProfile,
  StyledWrapper,
  StyledImg,
  StyledList,
  StyledItem,
} from './Profile.styled';

export const Profile = ({ username, tag, location, avatar, stats }) => {
  const { followers, views, likes } = stats;
  return (
    <StyledProfile>
      <StyledWrapper>
        <StyledImg src={avatar} alt="User avatar" />
        <p className="name">{username}</p>
        <p className="tag">{tag}</p>
        <p className="location">{location}</p>
      </StyledWrapper>

      <StyledList>
        <StyledItem>
          <span className="label">Followers</span>
          <span className="quantity">{followers}</span>
        </StyledItem>
        <StyledItem>
          <span className="label">Views</span>
          <span className="quantity">{views}</span>
        </StyledItem>
        <StyledItem>
          <span className="label">StyledItemkes</span>
          <span className="quantity">{likes}</span>
        </StyledItem>
      </StyledList>
    </StyledProfile>
  );
};
