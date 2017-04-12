import { connect } from 'react-redux';
import SingleStudentComponent from './SingleStudentComponent';

const mapState = (state) => {
  console.log(state);
  return {
    student: state.selectedStudent
  }
};


export default connect(mapState)(SingleStudentComponent);