import update from 'react-addons-update';
import constants from './actionConstants';

const {REGISTRATE_USER, HIDE_SPINNER} = constants;

//Actions
//--------------------

export function registerUser(payload) {
  return {
    type: REGISTRATE_USER,
    payload,
  };
}

export function hideSpinner(payload) {
  return {
    type: HIDE_SPINNER,
    payload,
  };
}

//Action Handlers

function handleRegisterUser(state, action) {
  return update(state, {
    isRegistered: {
      $set: action.payload.isRegistered,
    },
    isLoading: {
      $set: action.payload.isLoading,
    }
  });
}

function handleHideSpinner(state, action) { 
  return update(state, {
    isLoading: {
      $set: action.payload,
    },
  });
}

const ACTION_HANDLERS = {
  REGISTRATE_USER: handleRegisterUser,
  HIDE_SPINNER: handleHideSpinner
};

const initialState = {
  isRegistered: false,
  isLoading: false,
};

export function RegistrationReducer(state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type];

  return handler ? handler(state, action) : state;
}
