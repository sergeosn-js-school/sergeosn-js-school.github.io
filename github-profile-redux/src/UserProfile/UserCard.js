import React from 'react';

const UserCard = ({ name, login, avatar_url, company, location, public_repos, following, followers }) => (
    <div className="App">
        <div className="user-profile-preview">
            {avatar_url && <img src={avatar_url} alt={login} className="user-profile-preview--img"/>}
            <h1 className="user-profile-preview--h1">{name}</h1>
            <h2 className="user-profile-preview--h2">{login}</h2>
            <p className="user-profile-preview--company">{company}</p>
            <p className="user-profile-preview--location">{location}</p>
            {login && <p className="user-profile-preview--statistic">Statistics:</p>}
            {login && <p>Repositories: {public_repos}</p>}
            {login && <p>Following: {following}</p>}
            {login && <p>Followers: {followers}</p>}
        </div>
    </div>
);

export default UserCard;