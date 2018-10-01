import React, {Component} from 'react';
import {createConnect, fetchUser, updateUser} from '../helpers';

const {Provider, Consumer} = React.createContext(null);

class UserProvider extends Component {
    static connect = createConnect(Consumer);

    state = {
        user: null,
    };

    loadUser() {
        const {userLogin} = this.props;
        fetchUser(userLogin)
            .then(this.handleResponse);
    }

    componentDidMount() {
        this.loadUser();
    }

    handleResponse = response => {
        if (response.message) {
            return Promise.reject(response.message);
        }

        this.setState({user: response});

        return response;
    };

    handleUserUpdate = (data, token) => {
        return updateUser(token, data)
                .then(this.handleResponse);
    };

    render() {
        const {children} = this.props;
        return (
            <Provider value={
                {
                    user: this.state.user,
                    onChange: this.handleUserUpdate,
                }
            }>
                {children}
            </Provider>
        )
    }
}

export default UserProvider;
