import  { connect } from 'react-redux'
import NewRowForm from '../components/NewRowForm'
import { newLink } from '../actions/actions';

const mapStateToProps = (state) => {
  return {
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  	newLink: form => dispatch(newLink(form))    	
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewRowForm)

