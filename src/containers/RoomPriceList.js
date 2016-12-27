import  { connect } from 'react-redux'
import RoomPriceList from '../components/RoomPriceList'

const mapStateToProps = ({roomprices, form}) => {    
  // Filter using the simple filter by room price name
  if(form && form.simpleFilter && form.simpleFilter.values && form.simpleFilter.values.filterText && form.simpleFilter.values.filterText.length>3) {						
		roomprices = roomprices.filter(value => {			
  			if(value.shortDesc) {
      			return value.shortDesc.indexOf(state.form.simpleFilter.values.filterText) >= 0;
  			}
		});
	}
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



