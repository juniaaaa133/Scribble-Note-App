import React from 'react'
import '../../BUILD.css'
const ButtonX = ({text}) => {
  return (
    <div className="btn-light-ctn bl-act">
                <div className="trans absolute btn-lyer-light"></div>
                <div className='typ-btn-light trans bcu lg-f font-[500]'>{text.toUpperCase()}</div>
    </div>
  
  )
}

export default ButtonX