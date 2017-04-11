import {connect} from 'react-redux';
import AllStudentsComponent from './AllStudentsComponent';


function mapStateToProps(state) {
  return {
    allStudents: state.allStudents,
    selectedStudent: state.selectedStudent
  }
}

// const mapDispatchToProps = function (dispatch) {
//   return {
//     onLoadkittens: function () {
//       const action = action_name(canbeEmpty);
//       dispatch(action);
//     }
//   };
// };




const AllStudentsContainer = connect(mapStateToProps)(AllStudentsComponent);

export default AllStudentsContainer;