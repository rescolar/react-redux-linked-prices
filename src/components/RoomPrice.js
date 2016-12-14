import React from 'react'

const RoomPrice = (props) => {
  const { roomprice, unlink } = props		
  return (
  	<tr>
	        <td>{roomprice.id}</td>
	        <td>{roomprice.shortDesc}</td>
	        <td>{roomprice.linkPriceId}</td>
	        <td>{rpsMap.get(roomprice.linkPriceId)}</td>
	        <td>Type</td>
	        <td>Value</td>
	        <td><button className="btn btn-default" type="button" onClick={unlink.bind(null, roomprice.id)}>Unlink</button></td>	        
   </tr>
   )
}


export default RoomPrice

