import React from 'react';
import UserProfileProvider from './UserProvider';
import UserCard from './UserCard';
import UserFollowing from './UserFollowing';
import { stateToProps } from '../helpers'

const UserFollowingPreview = ({user}) => {
    return (
        user &&
        <UserCard>
            <UserFollowing/>
        </UserCard>
:
    'Please wait. Loading...'
)
};

export default UserProfileProvider.connect(stateToProps)(UserFollowingPreview);
