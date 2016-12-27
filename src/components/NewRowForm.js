import React from 'react'

import { Field, reduxForm } from 'redux-form'
import RoomPriceSelector from '../containers/RoomPriceSelector';


const renderField = (field) => (
    <div>
      <input {...field.input} type="text" size="10"/>
      {field.meta.touched && field.meta.error && 
       <span className="error">{field.meta.error}</span>}
    </div>
  )

const validate = values => {
  const errors = {}  
  if (!values.rulevalue) {
    errors.rulevalue = 'Required'
  } else if (isNaN(Number(values.rulevalue))) {
    errors.rulevalue = 'Must be a number'
  }
  return errors
}

const NewRowForm = (props) => {
  const { handleSubmit, pristine, reset, submitting, newLink } = props
  
  
  return (
    <div className="container">
      <form onSubmit={handleSubmit(newLink)}>
      <div className="row">
        <div className="col-md-3">
          <label>Linkables:</label>
        </div>
        <div className="col-md-3">
          <label>Allowed to be linked to (Masters):</label>
        </div>
        <div className="col-md-2">
          <label>Rule Type:</label>
        </div>
        <div className="col-md-2">
          <label>Rule Value:</label>
        </div>        
      </div>  
      <div className="row">        
          <div className="col-md-3">
            <RoomPriceSelector content="linkables"/>            
          </div>                
          <div className="col-md-3">
            <RoomPriceSelector content="parents"/>            
          </div>
          <div className="col-md-2">
            <Field name="ruletype" component="select">
              <option>Select...</option>
              <option>Fixed</option>
              <option>%</option>
            </Field>
          </div>         
          <div className="col-md-2">
            <Field name="rulevalue" component={renderField} type="text"/>            
          </div>
        </div>
        <div className="row">   
          <div className="col-md-10">
          </div>
          <div className="col-md-1">                     
            <button className="btn btn-default"  type="submit" disabled={pristine || submitting}>Create Link</button>              
          </div>        
        </div>
      </form>
    </div>
  )
}

export default reduxForm({
  form: 'newRowForm',  // a unique identifier for this form
  validate             // <--- validation function given to redux-form
})(NewRowForm)
