import React from 'react'
import '../../BUILD.css'

const ButtonR = ({text,width , theme}) => {
  return (
    <button className={`br-main ${width}`}>
        <div className={`br-layer mega-trans bg-sec`}></div>
        <div className={`br-text mega-trans sec-f  ${theme == 'dark' ? 'fontclD': 'fontcl'}`}>{text}</div>
        
    </button>
    
  )
}

export default ButtonR