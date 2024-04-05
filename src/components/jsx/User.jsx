 import userData from '../json/user.json'
 
 export const User = () => { 
   
  const { username, tag, location, avatar, stats } = userData;

  return ( 
    <div className='user_card'>
      <div className="profile">
        <div className="description">
          <img
            src={avatar}
            alt="User avatar"
            className="avatar_user"
          />
          <p className="name">{username}</p>
          <p className="tag">{tag}</p>
          <p className="location">{location}</p>
        </div>

        <ul className="stats">
          <li>
            <span className="label">Followers: </span>
            <span className="quantity">{stats.followers}</span>
          </li>
          <li>
            <span className="label">Views: </span>
            <span className="quantity">{stats.views}</span>
          </li>
          <li>
            <span className="label">Likes: </span>
            <span className="quantity">{stats.likes}</span>
          </li>
        </ul>
    </div> 
  </div>
  );
};
