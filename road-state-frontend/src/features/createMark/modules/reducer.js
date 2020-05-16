import update from 'react-addons-update';
import constants from './actionConstants';
import Geocoder from 'react-native-geocoding';

const {GET_CREATE_MARK_LOCATION, GET_SELECTED_LOCATION} = constants;

//Actions
//--------------------
export function getCreateLocation(payload) {
  return {
    type: GET_CREATE_MARK_LOCATION,
    payload,
  };
}

export function getSelectedLocation(coordinates) {
  return (dispatch) => {
    Geocoder.from(coordinates)
      .then(json =>
        dispatch({
          type: GET_SELECTED_LOCATION,
          payload: json.results[0],
        }),
      )
      .catch(error => console.log(error.message));
  };
}

//Action Handlers
//--------------------
function handleGetCreateLocation(state, action) {
  return update(state, {
    chooseLocation: {
      $set: action.payload,
    },
  });
}

function handleGetSelectedLocation(state, action) {
  return update(state, {
    selectedLocation: {
      $set: action.payload.formatted_address,
    },
  });
}

const ACTION_HANDLERS = {
  GET_CREATE_MARK_LOCATION: handleGetCreateLocation,
  GET_SELECTED_LOCATION: handleGetSelectedLocation,
};

const initialState = {
  chooseLocation: {},
  selectedLocation: {},
};

export function MarkCreateReducer(state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type];

  return handler ? handler(state, action) : state;
}
