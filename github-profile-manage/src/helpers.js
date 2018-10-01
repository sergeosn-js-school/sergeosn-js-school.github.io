import React from 'react';
import { config } from "./config";

const idX = x => x;

export const createConnect = (Consumer, defSelector = idX) => (
    (selector = defSelector) => Component => {
        const Connected = props => (
            <Consumer>
                {context => <Component {...selector(context)} {...props} />}
            </Consumer>
        );

        if (process.env.NODE_ENV !== 'production') {
            Connected.displayName = `connected(${
            Component.displayName || Component.name
                })`;
        }

        return Connected;
    }
);

const getUrl = url => config.apiUrl + url;

export const stateToProps = state => ({ ...state });

export const fetchUser = userLogin => {
    return fetch(
        getUrl('/users/' + userLogin)
    ).then(response => response.json());
};

export const fetchFollowingList = userLogin => {
    return fetch(
        getUrl('/users/' + userLogin + '/following')
    ).then(response => response.json());
};

export const fetchFollowersList = userLogin => {
    return fetch(
        getUrl('/users/' + userLogin + '/followers')
    ).then(response => response.json());
};

export const updateUser = (token, data) => {
    return fetch(
        getUrl('/user'),
        {
            headers: {
                'Authorization': 'token ' + token,
            },
            method: 'PATCH',
            body: JSON.stringify(data)
        }
    ).then(response => response.json());
};
