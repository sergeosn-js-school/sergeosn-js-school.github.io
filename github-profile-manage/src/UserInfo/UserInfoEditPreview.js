import React from 'react';
import UserProfileProvider from './UserProvider';
import UserInfoEdit from './UserInfoEdit';
import { stateToProps } from '../helpers'

const UserInfoEditPreview = ({ user }) => {
  return (
    user && <UserInfoEdit /> : 'Please wait. Loading...'
  )
};

export default UserProfileProvider.connect(stateToProps)(UserInfoEditPreview);
