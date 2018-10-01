import React from 'react';
import { Link } from 'react-router-dom';

export const UserFFCard = ({user}) => {
    return (
        <div className="user-profile-ff-preview">
            <div className="user-profile-ff-preview--main-info">
                {user.avatar_url && <img src={user.avatar_url} alt={user.login} className="user-profile-preview--img"/>}
                <div className="user-profile-ff-preview--main-info--info">
                    <Link to={'/' + user.login}>{user.login}
                        <h1 className="user-profile-preview--h1">{user.name}</h1>
                    </Link>
                    <a href={user.html_url} target="_blank">{user.html_url}</a>
                </div>
            </div>
            <div className="clear"> </div>
        </div>
    )
};
