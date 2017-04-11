import {connect} from 'react-redux';
import AllCampusesComponent from './AllCampusesComponent';


function mapStateToProps(state) {
  return {
    allCampuses: state.allCampuses,
    selectedCampus: state.selectedCampus
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


const AllCampusesContainer = connect(mapStateToProps)(AllCampusesComponent);

export default AllCampusesContainer;