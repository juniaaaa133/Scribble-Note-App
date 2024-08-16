import React from 'react'
import './index.css'
import { ErrorMessage } from 'formik'

const ErrorLine = ({name,value}) => {
  return (
    <div className='err-line text-[15px] text-red-600 main-f'>
        {
          name ? 
          <ErrorMessage name={name}/>
          : 
          value
        }
    </div>
  )
}

export default ErrorLine