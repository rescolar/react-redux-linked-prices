import  { connect } from 'react-redux'
import RoomPriceSelector from '../components/RoomPriceSelector'

const NOT_LINKED="notLinked"

const mapStateToProps = (state) => {
  const roomprices = state.roomprices
  const parents = getParents(roomprices);
  
  /*
  const parents = roomprices => {
	let parentSet = new Set()
    roomprices.map(r => (parentSet.add(r.linkPriceId)))
    return parentSet 
  }
  */
  return { 
    roomprices: roomprices,
    parents : parents
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(RoomPriceSelector)


function getParents(roomprices){
     let parents = new Set()
     roomprices.map(r => (parents.add(r.linkPriceId)))
     return parents    
}