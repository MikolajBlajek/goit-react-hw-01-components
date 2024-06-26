import React from 'react';
import PropTypes from 'prop-types';

const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <li className="item_friend">
      <span className={`status ${isOnline ? 'status_online' : 'status_offline'}`}></span>
      <img className="avatar_friend" src={avatar} alt="User avatar" width="48" />
      <p className="name_friend">{name}</p>
    </li>
  );
};

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

export default FriendListItem;