import React from 'react';
import UserProfileProvider from './UserProvider';
import UserCard from './UserCard';
import UserFollowers from './UserFollowers';
import { stateToProps } from '../helpers'

const UserFollowersPreview = ({user}) => {
    return (
        user &&
        <UserCard>
            <UserFollowers/>
        </UserCard>
        :
        'Please wait. Loading...'
    )
};

export default UserProfileProvider.connect(stateToProps)(UserFollowersPreview);
