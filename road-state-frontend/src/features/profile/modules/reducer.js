import update from 'react-addons-update';
import constants from './actionConstants';
import {strings} from '../../resources/resources';

const {GET_LOCALE} = constants;

//Actions
//--------------------
export function getLocale(payload) {
  return {
    type: GET_LOCALE,
    payload,
  };
}

//Action Handlers
//--------------------
function handleGetLocale(state, action) {
  strings.setLanguage(action.payload);
  return update(state, {
    locale: {
      $set: action.payload,
    },
  });
}

const ACTION_HANDLERS = {
  GET_LOCALE: handleGetLocale,
};

const initialState = {
  locale: 'ru',
};

export function ProfileReducer(state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type];

  return handler ? handler(state, action) : state;
}
