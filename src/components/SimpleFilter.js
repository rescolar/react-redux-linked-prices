import React from 'react'
import { Field, reduxForm } from 'redux-form'



const SimpleFilter = (props) => {
  const { handleSubmit, pristine, reset, submitting } = props
  
  
  return (
    <div className="container">
      <form>
      <div className="row">                            
            <Field name="filterText" component="input" type="text" placeholder="Filter by"/>            
      </div>
      </form>
    </div>
  )
}

export default reduxForm({
  form: 'simpleFilter'  // a unique identifier for this form  
})(SimpleFilter)
