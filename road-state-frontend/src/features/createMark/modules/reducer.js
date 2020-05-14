import update from 'react-addons-update';
import constants from './actionConstants';

const {GET_DIRECTION_INFO} = constants;

//Actions
//--------------------
export function getDirectionInfo(payload) {
  return {
    type: GET_DIRECTION_INFO,
    payload,
  };
}

//Action Handlers
//--------------------
function handleGetDirectionInfo(state, action) {
  return update(state, {
    directionInformation: {
      travelDistance: {
        $set: action.payload.distance,
      },
      travelTime: {
        $set: action.payload.time,
      },
      directionCoordinates: {
        $set: action.payload.coords,
      }
    },
  });
}

const ACTION_HANDLERS = {
  GET_DIRECTION_INFO: handleGetDirectionInfo
};

const initialState = {
  directionInformation: {
    travelDistance: {},
    travelTime: {},
    directionCoordinates: []
  }
};

export function MapReducer(state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type];

  return handler ? handler(state, action) : state;
}
