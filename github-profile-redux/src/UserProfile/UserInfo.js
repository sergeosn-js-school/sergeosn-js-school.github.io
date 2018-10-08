import React from 'react';
import UserCard from './UserCard';
import {connect} from 'react-redux';
import {fetchUser} from '../store/actions';

class UserInfo extends React.Component {
    componentDidMount() {
        const {userLogin, loadUser} = this.props;
        loadUser(userLogin);
    }

    isUndefined = (value) => value === undefined;

    render() {
        const { user } = this.props;

        if (!this.isUndefined(user.error)) {
            return (
                <div className="error alert alert-danger">
                    <div>
                        <img src="https://i.imgur.com/okHmU2N.gif" />
                    </div>
                    <span>
                        Error Loading: {user.error}
                    </span>
                </div>
            );
        }

        if (this.isUndefined(user.id)) {
            return (
                <img src="https://media.giphy.com/media/y1ZBcOGOOtlpC/200.gif" />
            );
        }

        return <UserCard {...user} />;
    }
}

const stateToProps = state => ({ ...state });
const handlers = {
    loadUser: (userLogin) => fetchUser(userLogin)
};

export default connect(stateToProps, handlers)(UserInfo);
