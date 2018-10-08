import { GET_USER } from './action-types';
import { config } from '../config';

const getUser = (user) => ({
    type: GET_USER,
    user
});

export const fetchUser = (userLogin) => dispatch => (
    fetch(config.apiUrl + userLogin)
        .then(response => response.json())
        .then(response => {
            if (response.message) {
                dispatch(getUser({error: response.message}));
                return;
            }
            dispatch(getUser(response))
        })
);
