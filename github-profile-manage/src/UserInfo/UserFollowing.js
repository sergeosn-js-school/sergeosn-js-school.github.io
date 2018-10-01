import React from 'react';
import UserProfileProvider from './UserProvider';
import { fetchFollowingList } from '../helpers';
import { UserFFCard } from './UserFFCard';
import { stateToProps } from '../helpers'

class UserFollowing extends React.Component {
    state = {
        following: null,
    };

    loadFollowing() {
        fetchFollowingList(this.props.user.login)
            .then(response => this.setState({
                    following: response
                })
            );
    }

    componentDidMount() {
        this.loadFollowing();
    }

    render() {
        const {following} = this.state;

        return (
            <div className="user-profile-preview--additional-info--list">
                {following && following.map(
                    user => <UserFFCard key={user.id} user={user}/>
                )}
            </div>
        );
    };
}

export default UserProfileProvider.connect(stateToProps)(UserFollowing);
