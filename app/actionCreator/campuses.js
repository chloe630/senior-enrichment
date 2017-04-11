import axios from 'axios';

/* ------------       CONSTANTS :)    ------------------ */
export const GET_ALL_CAMPUSES = 'GET_ALL_CAMPUSES';
export const GET_SINGLE_CAMPUS = 'GET_SINGLE_CAMPUS';

/* ------------       ACTION CREATORS!!     ------------------ */
export const getAllCampuses = allCampuses => ({
  type: GET_ALL_CAMPUSES,
  allCampuses
});

export const getSingleCampus = selectedCampus => ({
  type: GET_SINGLE_CAMPUS,
  selectedCampus
});


/* ------------       DISPATCHERS HERE!!    ------------------ */
export const getCampusFromServer = () => {
  return dispatch => {
    axios.get('/api/campus')
      .then(response => {
        dispatch(getAllcampuses(response.data));
      })
      .catch(err => console.error('Ugh... failed..', err));
  };
};

export const getSingleCampusFromServer = id => {
  return dispatch => {
    axios.get(`/api/campus/${id}`)
      .then(foundCampus => foundCampus.data)
      .then(campusData => {
        dispatch(getSinglecampus(campusData));
      })
      .catch(err => console.error('Ugh... failed..', err))
  };
};
