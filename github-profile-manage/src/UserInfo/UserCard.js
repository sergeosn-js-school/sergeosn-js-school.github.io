import React from 'react';
import UserProvider from './UserProvider';
import { Link } from 'react-router-dom';
import { stateToProps } from '../helpers'

const UserCard = ({user, children}) => {
    return (
        <div className="user-profile-preview">
            <div className="user-profile-preview--main-info">
                {user.avatar_url && <img src={user.avatar_url} alt={user.login} className="user-profile-preview--img"/>}
                <Link to={'/' + user.login + '/edit'}>
                    <h1 className="user-profile-preview--h1">{user.name}</h1>
                </Link>
                <h2 className="user-profile-preview--h2">{user.login}</h2>
                <p className="user-profile-preview--company">{user.company}</p>
                <p className="user-profile-preview--location">{user.location}</p>
                {user.login && <p className="user-profile-preview--bio">Bio:</p>}
                {user.bio ? <p className="user-profile-preview--bio-text">{user.bio}</p> : <p>no bio entered</p>}
            </div>
            <div className="user-profile-preview--additional-info">
                <div className="user-profile-preview--additional-info--header">
                    <Link to={'/' + user.login + '/following'} className="user-profile-preview--additional-info--following">
                        Following ({user.following})
                    </Link>
                    <Link to={'/' + user.login + '/followers'} className="user-profile-preview--additional-info--following">
                        Followers ({user.followers})
                    </Link>
                    <span className="user-profile-preview--additional-info--repositories">Repositories ({user.public_repos})</span>
                </div>
                {children}
            </div>
        </div>
    )
};

export default UserProvider.connect(stateToProps)(UserCard);
