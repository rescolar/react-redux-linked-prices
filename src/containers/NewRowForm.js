import  { connect } from 'react-redux'
import NewRowForm from '../components/NewRowForm'
import { newlink } from '../actions/actions';

const mapStateToProps = (state) => {
  return {
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  	newlink: form => dispatch(newlink(form))  
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewRowForm)

