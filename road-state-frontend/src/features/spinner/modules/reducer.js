import update from 'react-addons-update';
import constants from './actionConstants';

export function SpinnerReducer(state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type];

  return handler ? handler(state, action) : state;
}
