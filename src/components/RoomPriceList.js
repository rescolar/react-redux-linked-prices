import React from 'react'
import {Table} from 'react-bootstrap'
import RoomPrice from '../containers/RoomPrice'


const RoomPriceList = ( {roomprices} ) => {
	return (
		<Table striped bordered condensed hover>
	    <thead>
	      <tr>
	        <th>#</th>
	        <th>Room Package</th>
	        <th colSpan="2">Linked To</th>
	        <th>Rule Type</th>
	        <th>Rule Value</th>
	        <th>Unlink</th>
	      </tr>
	    </thead>
	    <tbody>
	    <tr>
	        <td></td>
	        <td></td>
	        <td></td>
	        <td></td>
	        <td></td>
	        <td></td>
	        <td><button className="btn btn-default" type="button">Unlink All</button></td>	       
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
