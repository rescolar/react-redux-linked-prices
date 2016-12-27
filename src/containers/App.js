import { connect } from 'react-redux'
import App from '../components/App'
import {loadRoomPrices} from '../actions/actions';

const mapStateToProps = (state) => {
  let guideId = window.guideId || 102
  let hotelId = window.hotelId || 67
  return{
  	guideId,
  	hotelId
  }
}

const mapDispatchToProps = (dispatch) => ({	
	loadRoomPrices : (guideId, hotelId) => dispatch(loadRoomPrices(102, 67))
})

export default connect(mapStateToProps, mapDispatchToProps)(App)

