import  { connect } from 'react-redux'
import RoomPrice from '../components/RoomPrice'
import { unLink } from '../actions/actions';


const mapStateToProps = ( {rpsMap, linkRules} ) => {        
  return { 
  	rpsMap,
  	linkRules
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  	unlink: id => dispatch(unLink(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(RoomPrice)

// 	
