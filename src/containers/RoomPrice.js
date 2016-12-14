import  { connect } from 'react-redux'
import RoomPrice from '../components/RoomPrice'
import { unlink } from '../actions/actions';


const mapStateToProps = (state) => {      
  return { 
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  	unlink: id => dispatch(unlink(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(RoomPrice)

// 	
