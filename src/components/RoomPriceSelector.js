import React from 'react'
import RoomPriceOption from '../containers/RoomPriceOption'
import { Field } from 'redux-form'



const RoomPriceSelector = ( {content, roomprices, parents, selectedLinkable} ) => {	
	
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





