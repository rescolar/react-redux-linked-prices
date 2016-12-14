import React from 'react'

import { Field, reduxForm } from 'redux-form'
import RoomPriceSelector from '../containers/RoomPriceSelector';

const NewRowForm = (props) => {
  const { handleSubmit, pristine, reset, submitting, newlink } = props
  
  
  return (
    <form onSubmit={handleSubmit(newlink)}>
      <div>
        <label>Linkables:</label>
        <div>
          <RoomPriceSelector content="linkables"/>          	
        </div>
      </div>
      <div>
        <label>Allowed to link to:</label>
        <div>
          <RoomPriceSelector content="parents"/>          	
        </div>
      </div>
       <div>
        <label>Rule Type:</label>
        <div>
          <Field name="ruletype" component="select">
            <option>Select...</option>
            <option>Fixed</option>
            <option>%</option>
          </Field>
        </div>
      </div>   
       <div>
        <label>Rule Value:</label>
        <div>
          <Field name="rulevalue" component="input" type="text"/>            
        </div>
      </div>                       
        <button className="btn btn-default"  type="submit" disabled={pristine || submitting}>Create Link</button>              
    </form>
  )
}

export default reduxForm({
  form: 'newRowForm'  // a unique identifier for this form
})(NewRowForm)
