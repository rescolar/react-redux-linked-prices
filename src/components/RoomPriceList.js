import React from 'react'
import {Table} from 'react-bootstrap'
import RoomPrice from '../containers/RoomPrice'


const RoomPriceList = ( {roomprices} ) => {
	return (
		<Table striped bordered condensed hover>
	    <thead>
	      <tr>
	        <th>Unlink</th>
	        <th>#</th>
	        <th>Room Package</th>
	        <th colSpan="2">Linked To</th>
	        <th>Rule Type</th>
	        <th>Rule Value</th>
	        
	      </tr>
	    </thead>
	    <tbody>
	    <tr>
	        <td><button className="btn btn-default" type="checkbox">Unlink All</button></td>	       
	        <td></td>
	        <td></td>
	        <td></td>
	        <td></td>
	        <td></td>
	        <td></td>
	        
	      </tr>
	      {roomprices.map(r => (
          	<RoomPrice rp={r} key={r.id} />          
          ))}         
	    </tbody>
	  </Table>
	)
}

export default RoomPriceList
//onClick={unlinkall}
