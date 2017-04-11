import { GET_ALL_CAMPUSES, GET_SINGLE_CAMPUS } from '../actionCreator/campuses';

const initialAlbumsState = {
  allCampuses: {},
  selectedCampus: []
};

export default function (state = initialAlbumsState, action) {
  const newState = Object.assign({}, state);
  switch (action.type) {

    case GET_ALL_CAMPUSES:
      newState.allCampuses = action.allCampuses;
      break;

    case GET_SINGLE_CAMPUS:
      newState.selectedCampus = action.selectedCampus;
      break;

    default:
      return state;
  }
  return newState;
};

