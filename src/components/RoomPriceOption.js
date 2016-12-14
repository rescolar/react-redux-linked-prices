import React from 'react'

const RoomPriceOption = ( {roomprice} ) => {
  return(
  	<option value={roomprice.id}>{roomprice.shortDesc}</option>
  )
}


export default RoomPriceOption

