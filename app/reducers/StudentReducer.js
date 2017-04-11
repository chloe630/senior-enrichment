import { GET_ALL_STUDENTS, GET_SINGLE_STUDENT } from '../actionCreator/students';

const initialState = {
  allStudents: [],
  selectedStudent: {}
};

export default function (state = initialState, action) {
  const newState = Object.assign({}, state);
  switch (action.type) {

    case GET_ALL_STUDENTS:
      newState.allStudents = action.allStudents;
      break;

    case GET_SINGLE_STUDENT:
      newState.selectedStudent = action.selectedStudent;
      break;

    default:
      return state;
  }
  return newState;
}