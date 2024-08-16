import React from 'react'
import '../../BUILD.css'

const ButtonY = ({text}) => {
  return (
    <div className="btn-dark-ctn bl-act">
    <div className="trans absolute btn-lyer"></div>
    <div className='typ-btn trans bcu lg-f'>{text.toUpperCase()}</div>
</div>
    
  )
}

export default ButtonY