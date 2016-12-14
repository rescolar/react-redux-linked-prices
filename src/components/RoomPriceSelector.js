import React from 'react'
import RoomPriceOption from '../containers/RoomPriceOption'
import { Field } from 'redux-form'

const LINKABLES="linkables"
const PARENTS="parents"
function isNotLinked (roomprice){  
  return roomprice.linkPriceId == 0
}
function isNotParent (roomprice){  
  return true;
}


const RoomPriceSelector = ( {content, roomprices, parents, onSelect} ) => {	
	if (content == LINKABLES){
          roomprices = roomprices.filter(isNotLinked).filter(roomprice => {
			  return !parents.has(roomprice.id);
		  })

    }
    if (content == PARENTS){
          roomprices = roomprices.filter(isNotLinked)
    }
	return (
		<Field name={content} component="select">
        	<option>Select...</option>
        {roomprices.map(r => (
          	<RoomPriceOption roomprice={r} key={r.id} />          
          ))}         
      </Field>  	
	)
}

export default RoomPriceSelector

