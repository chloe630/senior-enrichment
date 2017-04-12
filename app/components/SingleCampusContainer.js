import { connect } from 'react-redux';
import SingleCampusComponent from './SingleCampusComponent';

const mapState = (state) => {
  console.log(state);
  return {
    campus: state.selectedCampus
  }
};

export default connect(mapState)(SingleCampusComponent);