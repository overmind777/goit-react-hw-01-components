import { Wrapper, ListWrapper, ItemWrapper } from './FriendList.styled';

export const FriendList = ({ friends }) => {
  return (
    <Wrapper>
      <ListWrapper className="friend-list">
        {friends.map(friend => {
          return (
            <ItemWrapper className="item" key={friend.id}>
              <span className={friend.isOnline ? 'online' : 'offline'}></span>
              <img
                className="avatar"
                src={friend.avatar}
                alt="User avatar"
                width="48"
              />
              <p className="name">{friend.name}</p>
            </ItemWrapper>
          );
        })}
      </ListWrapper>
    </Wrapper>
  );
};
