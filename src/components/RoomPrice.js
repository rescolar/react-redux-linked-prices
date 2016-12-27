import React from 'react'

const RoomPrice = (props) => {
  const { rp, unlink, rpsMap, linkRule} = props  
  let rpParenName = rpsMap.get(rp.linkPriceId)  
  return (
  	<tr>
	        <td><button className="btn btn-default" type="checkbox" onClick={unlink.bind(null, rp.id)}>Unlink</button></td>	        
	        <td>{rp.id}</td>
	        <td>{rp.shortDesc}</td>
	        <td>{rp.linkPriceId}</td>
	        <td>{rpParenName}</td>
	        <td>{linkRule.type}</td>
	        <td>{linkRule.value}</td>
	        
   </tr>
   )
}


export default RoomPrice

