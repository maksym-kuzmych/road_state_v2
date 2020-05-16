import update from 'react-addons-update';
import constants from './actionConstants';
import RNGooglePlaces from 'react-native-google-places';
import request from '../../../util/request';

const {
  GET_CURRENT_LOCATION,
  GET_INPUT,
  TOGGLE_SEARCH_RESULT,
  ADD_INTERMEDIATE_POINT,
  REMOVE_INTERMEDIATE_POINT,
  GET_ADDRESS_PREDICTIONS,
  GET_SELECTED_ADDRESS,
  BUILD_ROUTE,
} = constants;

//Actions
//--------------------
export function getCurrentLocation() {
  return dispatch => {
    navigator.geolocation.getCurrentPosition(
      position => {
        dispatch({
          type: GET_CURRENT_LOCATION,
          payload: position,
        });
      },
      error => console.log(error.message),
    );
  };
}

export function getInputData(payload) {
  return {
    type: GET_INPUT,
    payload,
  };
}

//Toggle search result modal
export function toggleSearchResultModal(payload) {
  return {
    type: TOGGLE_SEARCH_RESULT,
    payload,
  };
}

//Add intermediate point
export function addIntermediatePoint(payload) {
  return {
    type: ADD_INTERMEDIATE_POINT,
    payload,
  };
}

//Remove intermediate point
export function removeIntermediatePoint(payload) {
  return {
    type: REMOVE_INTERMEDIATE_POINT,
    payload,
  };
}

//GET ADRESSES FROM GOOGLE PLACE
export function getAddressPredictions() {
  return (dispatch, store) => {
    let userInput;
    if (store().drawer.resultTypes.pickUp)
      userInput = store().drawer.inputData.pickUp;
    if (store().drawer.resultTypes.intermediate_1.selected === true)
      userInput = store().drawer.inputData.intermediate_1;
    if (store().drawer.resultTypes.intermediate_2.selected === true)
      userInput = store().drawer.inputData.intermediate_2;
    if (store().drawer.resultTypes.intermediate_3.selected === true)
      userInput = store().drawer.inputData.intermediate_3;
    if (store().drawer.resultTypes.dropOff)
      userInput = store().drawer.inputData.dropOff;

    RNGooglePlaces.getAutocompletePredictions(userInput, {
      country: 'UA',
    })
      .then(results =>
        dispatch({
          type: GET_ADDRESS_PREDICTIONS,
          payload: results,
        }),
      )
      .catch(error => console.log(error.message));
  };
}

//get selected address

export function getSelectedAddress(payload) {
  return (dispatch, store) => {
    RNGooglePlaces.lookUpPlaceByID(payload)
      .then(results => {
        dispatch({
          type: GET_SELECTED_ADDRESS,
          payload: results,
        });
      })
      // .then(() => {
      //   //Get the distance and time
      //   if (
      //     store().drawer.selectedAddress.selectedPickUp &&
      //     store().drawer.selectedAddress.selectedDropOff
      //   ) {
      //     request
      //       .get('https://maps.googleapis.com/maps/api/distancematrix/json')
      //       .query({
      //         origins:
      //           store().drawer.selectedAddress.selectedPickUp.location
      //             .latitude +
      //           ',' +
      //           store().drawer.selectedAddress.selectedPickUp.location
      //             .longitude,
      //         destinations:
      //           store().drawer.selectedAddress.selectedDropOff.location
      //             .latitude +
      //           ',' +
      //           store().drawer.selectedAddress.selectedDropOff.location
      //             .longitude,
      //         mode: 'driving',
      //         key: 'AIzaSyArRVqnpPHZ-q2BMzjM62NmsU0885mHvLs',
      //       })
      //       .finish((error, res) => {
      //         dispatch({
      //           type: GET_DISTANCE_MATRIX,
      //           payload: res.body,
      //         });
      //       });
      //   }
      // })
      .catch(error => console.log(error.message));
  };
}

//build route
export function buildRoute(payload) {
  return {
    type: BUILD_ROUTE,
    payload,
  };
}

//Action Handlers

function handleGetCurrentLocation(state, action) {
  return update(state, {
    region: {
      latitude: {
        $set: action.payload.coords.latitude,
      },
      longitude: {
        $set: action.payload.coords.longitude,
      },
      latitudeDelta: {
        $set: LATITUDE_DELTA,
      },
      longitudeDelta: {
        $set: LONGITUDE_DELTA,
      },
    },
  });
}

function handleGetInputData(state, action) {
  const {key, value} = action.payload;
  return update(state, {
    inputData: {
      [key]: {
        $set: value,
      },
    },
  });
}

function handleToggleSearchResult(state, action) {
  if (action.payload === 'pickUp') {
    return update(state, {
      resultTypes: {
        pickUp: {
          $set: true,
        },
        intermediate_1: {
          selected: {
            $set: false,
          },
        },
        intermediate_2: {
          selected: {
            $set: false,
          },
        },
        intermediate_3: {
          selected: {
            $set: false,
          },
        },
        dropOff: {
          $set: false,
        },
      },
      predictions: {
        $set: {},
      },
    });
  }
  if (action.payload === 'intermediate_1') {
    return update(state, {
      resultTypes: {
        pickUp: {
          $set: false,
        },
        intermediate_1: {
          selected: {
            $set: true,
          },
        },
        intermediate_2: {
          selected: {
            $set: false,
          },
        },
        intermediate_3: {
          selected: {
            $set: false,
          },
        },
        dropOff: {
          $set: false,
        },
      },
      predictions: {
        $set: {},
      },
    });
  }
  if (action.payload === 'intermediate_2') {
    return update(state, {
      resultTypes: {
        pickUp: {
          $set: false,
        },
        intermediate_1: {
          selected: {
            $set: false,
          },
        },
        intermediate_2: {
          selected: {
            $set: true,
          },
        },
        intermediate_3: {
          selected: {
            $set: false,
          },
        },
        dropOff: {
          $set: false,
        },
      },
      predictions: {
        $set: {},
      },
    });
  }
  if (action.payload === 'intermediate_3') {
    return update(state, {
      resultTypes: {
        pickUp: {
          $set: false,
        },
        intermediate_1: {
          selected: {
            $set: false,
          },
        },
        intermediate_2: {
          selected: {
            $set: false,
          },
        },
        intermediate_3: {
          selected: {
            $set: true,
          },
        },
        dropOff: {
          $set: false,
        },
      },
      predictions: {
        $set: {},
      },
    });
  }
  if (action.payload === 'dropOff') {
    return update(state, {
      resultTypes: {
        pickUp: {
          $set: false,
        },
        intermediate_1: {
          selected: {
            $set: false,
          },
        },
        intermediate_2: {
          selected: {
            $set: false,
          },
        },
        intermediate_3: {
          selected: {
            $set: false,
          },
        },
        dropOff: {
          $set: true,
        },
      },
      predictions: {
        $set: {},
      },
    });
  }
}

function handleAddIntermediatePoint(state, action) {
  if (action.payload === 0) {
    return update(state, {
      resultTypes: {
        intermediate_1: {
          visible: {
            $set: true,
          },
        },
        showPoint: {
          $set: 1,
        },
        buildRoute: {
          $set: false,
        },
      },
    });
  }
  if (action.payload === 1) {
    return update(state, {
      resultTypes: {
        intermediate_2: {
          visible: {
            $set: true,
          },
        },
        showPoint: {
          $set: 2,
        },
        buildRoute: {
          $set: false,
        },
      },
    });
  }
  if (action.payload === 2) {
    return update(state, {
      resultTypes: {
        intermediate_3: {
          visible: {
            $set: true,
          },
        },
        showPoint: {
          $set: 999,
        },
        buildRoute: {
          $set: false,
        },
      },
    });
  }
}

function handleRemoveIntermediatePoint(state, action) {
  if (action.payload === 1) {
    if (state.selectedAddress.selectedIntermediate_1) {
      return update(state, {
        resultTypes: {
          intermediate_1: {
            visible: {
              $set: false,
            },
            location: {
              $set: null,
            },
          },
          showPoint: {
            $set: 0,
          },
          buildRoute: {
            $set: false,
          },
        },
        selectedAddress: {
          selectedIntermediate_1: {
            $set: null,
          },
        },
      });
    } else
      return update(state, {
        resultTypes: {
          intermediate_1: {
            visible: {
              $set: false,
            },
            location: {
              $set: null,
            },
          },
          showPoint: {
            $set: 0,
          },
          buildRoute: {
            $set: false,
          },
        },
      });
  }
  if (action.payload === 2) {
    if (state.selectedAddress.selectedIntermediate_2) {
      return update(state, {
        resultTypes: {
          intermediate_2: {
            visible: {
              $set: false,
            },
            location: {
              $set: null,
            },
          },
          showPoint: {
            $set: 1,
          },
          buildRoute: {
            $set: false,
          },
        },
        selectedAddress: {
          selectedIntermediate_2: {
            $set: null,
          },
        },
      });
    } else
      return update(state, {
        resultTypes: {
          intermediate_2: {
            visible: {
              $set: false,
            },
            location: {
              $set: null,
            },
          },
          showPoint: {
            $set: 1,
          },
          buildRoute: {
            $set: false,
          },
        },
      });
  }
  if (action.payload === 3) {
    if (state.selectedAddress.selectedIntermediate_3) {
      return update(state, {
        resultTypes: {
          intermediate_3: {
            visible: {
              $set: false,
            },
            location: {
              $set: null,
            },
          },
          showPoint: {
            $set: 2,
          },
          buildRoute: {
            $set: false,
          },
        },
        selectedAddress: {
          selectedIntermediate_3: {
            $set: null,
          },
        },
      });
    } else
      return update(state, {
        resultTypes: {
          intermediate_3: {
            visible: {
              $set: false,
            },
            location: {
              $set: null,
            },
          },
          showPoint: {
            $set: 2,
          },
          buildRoute: {
            $set: false,
          },
        },
      });
  }
}

function handleGetAddressPredictions(state, action) {
  return update(state, {
    predictions: {
      $set: action.payload,
    },
  });
}

function handleGetSelectedAddress(state, action) {
  let selectedTitle;
  if (state.resultTypes.pickUp === true) selectedTitle = 'selectedPickUp';
  if (state.resultTypes.intermediate_1.selected === true)
    selectedTitle = 'selectedIntermediate_1';
  if (state.resultTypes.intermediate_2.selected === true)
    selectedTitle = 'selectedIntermediate_2';
  if (state.resultTypes.intermediate_3.selected === true)
    selectedTitle = 'selectedIntermediate_3';
  if (state.resultTypes.dropOff === true) selectedTitle = 'selectedDropOff';

  if (selectedTitle === 'selectedPickUp') {
    return update(state, {
      selectedAddress: {
        [selectedTitle]: {
          $set: action.payload,
        },
      },
      resultTypes: {
        pickUp: {
          $set: false,
        },
        intermediate_1: {
          selected: {
            $set: false,
          },
        },
        intermediate_2: {
          selected: {
            $set: false,
          },
        },
        intermediate_3: {
          selected: {
            $set: false,
          },
        },
        dropOff: {
          $set: false,
        },
        pickUpLocation: {
          $set: action.payload.location,
        },
      },
    });
  }
  if (selectedTitle === 'selectedIntermediate_1') {
    return update(state, {
      selectedAddress: {
        [selectedTitle]: {
          $set: action.payload,
        },
      },
      resultTypes: {
        pickUp: {
          $set: false,
        },
        intermediate_1: {
          selected: {
            $set: false,
          },
          location: {
            $set: action.payload.location,
          },
        },
        intermediate_2: {
          selected: {
            $set: false,
          },
        },
        intermediate_3: {
          selected: {
            $set: false,
          },
        },
        dropOff: {
          $set: false,
        },
      },
    });
  }
  if (selectedTitle === 'selectedIntermediate_2') {
    return update(state, {
      selectedAddress: {
        [selectedTitle]: {
          $set: action.payload,
        },
      },
      resultTypes: {
        pickUp: {
          $set: false,
        },
        intermediate_1: {
          selected: {
            $set: false,
          },
        },
        intermediate_2: {
          selected: {
            $set: false,
          },
          location: {
            $set: action.payload.location,
          },
        },
        intermediate_3: {
          selected: {
            $set: false,
          },
        },
        dropOff: {
          $set: false,
        },
      },
    });
  }
  if (selectedTitle === 'selectedIntermediate_3') {
    return update(state, {
      selectedAddress: {
        [selectedTitle]: {
          $set: action.payload,
        },
      },
      resultTypes: {
        pickUp: {
          $set: false,
        },
        intermediate_1: {
          selected: {
            $set: false,
          },
        },
        intermediate_2: {
          selected: {
            $set: false,
          },
        },
        intermediate_3: {
          selected: {
            $set: false,
          },
          location: {
            $set: action.payload.location,
          },
        },
        dropOff: {
          $set: false,
        },
      },
    });
  }
  if (selectedTitle === 'selectedDropOff') {
    return update(state, {
      selectedAddress: {
        [selectedTitle]: {
          $set: action.payload,
        },
      },
      resultTypes: {
        pickUp: {
          $set: false,
        },
        intermediate_1: {
          selected: {
            $set: false,
          },
        },
        intermediate_2: {
          selected: {
            $set: false,
          },
        },
        intermediate_3: {
          selected: {
            $set: false,
          },
        },
        dropOff: {
          $set: false,
        },
        dropOffLocation: {
          $set: action.payload.location,
        },
      },
    });
  }
}

function handleBuildRoute(state, action) {
  return update(state, {
    resultTypes: {
      buildRoute: {
        $set: action.payload,
      },
    },
  });
}

const ACTION_HANDLERS = {
  GET_CURRENT_LOCATION: handleGetCurrentLocation,
  GET_INPUT: handleGetInputData,
  TOGGLE_SEARCH_RESULT: handleToggleSearchResult,
  ADD_INTERMEDIATE_POINT: handleAddIntermediatePoint,
  REMOVE_INTERMEDIATE_POINT: handleRemoveIntermediatePoint,
  GET_ADDRESS_PREDICTIONS: handleGetAddressPredictions,
  GET_SELECTED_ADDRESS: handleGetSelectedAddress,
  BUILD_ROUTE: handleBuildRoute,
};

const initialState = {
  region: {},
  inputData: {},
  resultTypes: {
    pickUp: {},
    pickUpLocation: null,
    intermediate_1: {id: 1, visible: {}, selected: {}, location: null},
    intermediate_2: {id: 2, visible: {}, selected: {}, location: null},
    intermediate_3: {id: 3, visible: {}, selected: {}, location: null},
    dropOff: {},
    dropOffLocation: null,
    showPoint: 0,
    buildRoute: null,
  },
  selectedAddress: {},
};

export function DrawerReducer(state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type];

  return handler ? handler(state, action) : state;
}
