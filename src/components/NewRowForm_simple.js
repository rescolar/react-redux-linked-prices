import React from 'react'

import { Input } from 'react-bootstrap'
import { FormControl } from 'react-bootstrap'
import { FormGroup } from 'react-bootstrap'
import { ControlLabel } from 'react-bootstrap'
import { HelpBlock } from 'react-bootstrap'
import { Form } from 'react-bootstrap'
import { Button } from 'react-bootstrap'
import RoomPriceSelector from '../containers/RoomPriceSelector';


const NewRowForm = (props) => {	   
  console.log('NewRowForm.props', props) 
  //let onSelectLinkable = {props.onSelectLinkable} 	
  //let onSelectParent = {props.onSelectParent} 	
  //let onNewRow = {props.onNewRow} 	  
  return (
    <div/>
    /*
    <Form onSubmit={onNewRow}>
      <FormGroup controlId="formControlsSelect">
      	<ControlLabel>Link:</ControlLabel>
      	<RoomPriceSelector  onSelect={onSelectLinkable} content="linkables"/>
      	<ControlLabel>To:</ControlLabel>
      	<RoomPriceSelector onSelect={onSelectParent} content="parents"/>
      	<ControlLabel>With Rule Type:</ControlLabel>
      	<FormControl  componentClass="select" placeholder="select">
      		<option>Fixed</option>
      		<option>%</option>
      	</FormControl>
      	<ControlLabel>And Rule Value:</ControlLabel>
      	<FormControl type="text" placeholder="Link value" />
      	<Button type="submit" >
      		Create new rule
    	</Button>
    	</FormGroup>    	
     </Form>
     */
  )
}

export default NewRowForm

