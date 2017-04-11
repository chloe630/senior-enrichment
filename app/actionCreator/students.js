import axios from 'axios';

/* ------------       CONSTANTS :)    ------------------ */

export const GET_ALL_STUDENTS = 'GET_ALL_STUDENTS';
export const GET_SINGLE_STUDENT = 'GET_SINGLE_STUDENT';

/* ------------       ACTION CREATORS!!     ------------------ */

export const getAllStudents = students => ({
  type: GET_ALL_STUDENTs,
  students
});

export const getSingleStudent = selectedStudent => ({
  type: GET_SINGLE_STUDENT,
  selectedStudent
});


/* ------------       DISPATCHERS HERE!!    ------------------ */


export const getStudentsFromServer = () => {
  return dispatch => {
    axios.get('/api/student')
      .then(response => {
        dispatch(getAllStudentsName(response.data));
      })
      .catch(err => console.error('Ugh... failed..', err));
  };
};

export const getSingleStudentFromServer = id => {
  return dispatch => {
    axios.get(`/api/student/${id}`)
      .then(foundStudent => foundStudent.data)
      .then(studentData => {
        // once we've got our data asynchronously from the back end, dispatch our regular old action creator to the store using the passed in dispatch argument
        dispatch(getSingleStudent(studentData));
      })
      .catch(err => console.error('Ugh... failed..', err))
  };
};
