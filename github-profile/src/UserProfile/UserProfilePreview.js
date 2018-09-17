import React from 'react';

const UserProfilePreview = ({
        avatar_url,
        name,
        login,
        company,
        location,
        bio,
        public_repos,
        following,
        followers,
        onViewModeClick
    }) => (
    <div className="user-profile-preview">
        {avatar_url && <img src={avatar_url} alt={login} className="user-profile-preview--img"/>}
        <a href="#" onClick={onViewModeClick}>
            <h1 className="user-profile-preview--h1">{name}</h1>
        </a>
        <h2 className="user-profile-preview--h2">{login}</h2>
        <p className="user-profile-preview--company">{company}</p>
        <p className="user-profile-preview--location">{location}</p>
        {login && <p className="user-profile-preview--bio">Bio:</p>}
        {bio ? <p className="user-profile-preview--bio-text">{bio}</p> : <p>no bio entered</p>}
        {login && <p className="user-profile-preview--statistic">Statistics:</p>}
        {login && <p className="user-profile-preview--statistic-text">Repositories: {public_repos}</p>}
        {login && <p className="user-profile-preview--statistic-text">Following: {following}</p>}
        {login && <p className="user-profile-preview--statistic-text">Followers: {followers}</p>}
    </div>
);

export default UserProfilePreview;
