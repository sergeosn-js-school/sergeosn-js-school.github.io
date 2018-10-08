import { GET_USER } from './action-types';

const initialState = {
  user: {},
};

const appReducer = (state = initialState, action) => {
  const { type } = action;
  switch (type) {
    case GET_USER:
      const { user } = action;
      return {
        ...state,
        user
      };
    default:
      return state;
  }
};

export default appReducer;
