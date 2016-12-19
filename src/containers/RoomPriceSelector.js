import  { connect } from 'react-redux'
import RoomPriceSelector from '../components/RoomPriceSelector'

const CONTENT_LINKABLES="linkables"
const CONTENT_PARENTS="parents"

function isNotLinked (rp){  
  return rp.linkPriceId == 0
}


const mapStateToProps = (state, props) => {
  let roomprices = state.roomprices
  const parents = getParents(roomprices)
  // Filter drop down content based in the type of content to show (linables or parents)
  if (props.content == CONTENT_LINKABLES){
    roomprices = roomprices.filter(isNotLinked).filter(rp => {
        // Filter is not a parent
		return !parents.has(rp.id);
	})
	// Filter using the simple filter by room price name
  	if(state.form && state.form.simpleFilter && state.form.simpleFilter.values && state.form.simpleFilter.values.filterText && state.form.simpleFilter.values.filterText.length>3) {						
		roomprices = roomprices.filter(value => {			
  			if(value.shortDesc) {
      			return value.shortDesc.indexOf(state.form.simpleFilter.values.filterText) >= 0;
  			}
		});
	}

    }
    if (props.content == CONTENT_PARENTS){
          roomprices = roomprices.filter(isNotLinked).filter(rp => {
			  // Filter the selected linkable
			  return !(rp.id==selectedLinkable)
		  })
    }

  // Room price selected aslinkable so it is not showed as available parent
  let selectedLinkable = 0  
  if (state.form.newRowForm && state.form.newRowForm.values && state.form.newRowForm.values.linkables){
  	selectedLinkable = state.form.newRowForm.values.linkables
  }
  
  return { 
    roomprices,
    parents,
    selectedLinkable
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