import update from 'react-addons-update';
import constants from './actionConstants';

const {LOGIN_USER} = constants;

//Actions
//--------------------

export function loginUser(payload) {
  return {
    type: LOGIN_USER,
    payload,
  };
}

//Action Handlers

function handleLoginUser(state, action) {
  return update(state, {
    isLogedIn: {
      $set: action.payload,
    },
  });
}

const ACTION_HANDLERS = {
  LOGIN_USER: handleLoginUser,
};

const initialState = {
  isLogedIn: false,
};

export function LoginReducer(state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type];

  return handler ? handler(state, action) : state;
}
