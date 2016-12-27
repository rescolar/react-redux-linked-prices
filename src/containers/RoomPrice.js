import  { connect } from 'react-redux'
import RoomPrice from '../components/RoomPrice'
import { unLink } from '../actions/actions';


const mapStateToProps = (state, props) => {
  let rpsMap = state.rpsMap
  let linkRules = state.linkRules  
  let linkRule = linkRules.find(lr => {						  	
			  	return (lr.id=== props.rp.linkRuleId)
		  	})  
  return { 
  	rpsMap,
  	linkRule
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  	unlink: id => dispatch(unLink(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(RoomPrice)

// 	
