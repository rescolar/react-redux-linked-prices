import React from 'react'

const RoomPrice = (props) => {
  const { rp, unlink, rpsMap, linkRules} = props	  
  let rpParenName = rpsMap.get(rp.linkPriceId)
  let linkRule = linkRules.find(lr => {			
			  	return !(lr.id==rp.linkRuleId)
		  	})  
  return (
  	<tr>
	        <td>{rp.id}</td>
	        <td>{rp.shortDesc}</td>
	        <td>{rp.linkPriceId}</td>
	        <td>{rpParenName}</td>
	        <td>{linkRule.link_type}</td>
	        <td>{linkRule.link_value}</td>
	        <td><button className="btn btn-default" type="button" onClick={unlink.bind(null, rp.id)}>Unlink</button></td>	        
   </tr>
   )
}


export default RoomPrice

