import React from 'react'
import RoomPriceOption from '../containers/RoomPriceOption'
import { Field } from 'redux-form'

const LINKABLES="linkables"
const PARENTS="parents"
function isNotLinked (rp){  
  return rp.linkPriceId == 0
}


const RoomPriceSelector = ( {content, roomprices, parents, selectedLinkable} ) => {	
	if (content == LINKABLES){
          roomprices = roomprices.filter(isNotLinked).filter(rp => {
          	  // Filter is not a parent
			  return !parents.has(rp.id);
		  })

    }
    if (content == PARENTS){
          roomprices = roomprices.filter(isNotLinked).filter(rp => {
			  // Filter the selected linkable
			  return !(rp.id==selectedLinkable)
		  })
    }
	return (
		<Field name={content} component="select">
        	<option>Select...</option>
        {roomprices.map(rp => (
          	<RoomPriceOption roomprice={rp} key={rp.id} />          
          ))}         
      </Field>  	
	)
}

export default RoomPriceSelector





