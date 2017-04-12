import {connect} from 'react-redux';
import AllCampusesComponent from './AllCampusesComponent';


function mapStateToProps(state) {
  return {
    allCampuses: state.allCampuses
  }
}


const AllCampusesContainer = connect(mapStateToProps)(AllCampusesComponent);

export default AllCampusesContainer;