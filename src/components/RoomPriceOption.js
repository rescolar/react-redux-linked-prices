import React from 'react'

const RoomPriceOption = ( {roomprice} ) => {
  return(
  	<option value={roomprice.id}>{roomprice.shortDesc} ({roomprice.id})</option>
  )
}


export default RoomPriceOption

