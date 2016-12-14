import  { connect } from 'react-redux'
import RoomPriceList from '../components/RoomPriceList'

const mapStateToProps = (state) => {  
  let roomprices = state.roomprices  
  roomprices = roomprices.filter(rp => rp.linkPriceId > 0);
  return {     
    roomprices: roomprices,    
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(RoomPriceList)



