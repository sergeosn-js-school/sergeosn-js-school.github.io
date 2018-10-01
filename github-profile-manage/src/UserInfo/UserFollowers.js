import React from 'react';
import UserProfileProvider from './UserProvider';
import { fetchFollowersList } from '../helpers';
import { UserFFCard } from './UserFFCard';
import { stateToProps } from '../helpers'

class UserFollowers extends React.Component {
    state = {
        followers: null,
    };

    loadFollowers() {
        fetchFollowersList(this.props.user.login)
            .then(response => this.setState({
                    followers: response
                })
            );
    }

    componentDidMount() {
        this.loadFollowers();
    }

    render() {
        const {followers} = this.state;

        return (
            <div className="user-profile-preview--additional-info--list">
                {followers && followers.map(
                    user => <UserFFCard key={user.id} user={user}/>
                )}
            </div>
        );
    };
}

export default UserProfileProvider.connect(stateToProps)(UserFollowers);
