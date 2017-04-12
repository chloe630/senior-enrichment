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
      .then(students => students.data)
      .then(students => dispatch(getAllStudentsName(students)))
      .catch(err => console.error('Ugh... failed to summon all students..', err));
  };
};

export const getSingleStudentFromServer = id => {
  return dispatch => {
    axios.get(`/api/student/${id}`)
      .then(foundStudent => foundStudent.data)
      .then(foundStudent => dispatch(getSingleStudent(foundStudent)))
      .catch(err => console.error(`Ugh... failed to find student ${id}..`, err))
  };
};
