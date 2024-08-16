import React from 'react'
import '../../BUILD.css'


const ToggleX = ({text , open}) => {

  return (
    <div className={`${open == true ? 'togxO': 'togx'} fontclD mega-trans sec-f bg-sec `}>
        {text}
    </div>
  )
}

export default ToggleX