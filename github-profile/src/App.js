import React, {Component} from 'react';
import UserProfile from './UserProfile/UserProfile';
import { updateUserInfo, fetchUser, decode } from './helper';
import { token } from './config';

class App extends Component {
    state = {
        user: null,
        loading: true,
    };

    updateUser = data => {
        return fetch('https://api.github.com/user', {
            headers: {
                'Authorization': 'token ' + decode(decode(token)),
            },
            method: 'PATCH',
            body: JSON.stringify(data)
        }).then(res => {
            if (res.ok) {
                this.changeUser(data);
            } else {
                alert('Can update user. Please try again later.');
            }

            return res.json()
        }).catch(err => err);
    };

    changeUser = data => {
        this.setState(
            updateUserInfo(data)
        );
        this.setState({ loading: false });
    };

    loadUser() {
        const { userUrl } = this.props;
        if (userUrl == null) return;
        fetchUser(userUrl).then(this.changeUser);
    };

    componentDidMount() {
        this.loadUser();
    };

    componentDidUpdate(prevProps) {
        const { userUrl } = this.props;
        if (prevProps.userUrl !== userUrl) {
            this.loadUser();
        }
    };

    render() {
        const { user, loading } = this.state;
        return (
            <div className="container">
                <div className="row">
                    { user &&
                    <UserProfile
                        user={user}
                        onChange={this.updateUser}
                    />
                    }
                    { loading && 'Loading. Please wait...' }
                </div>
            </div>
        );
    }
}

export default App;
