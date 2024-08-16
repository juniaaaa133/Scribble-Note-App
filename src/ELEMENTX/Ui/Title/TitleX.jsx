import '../../BUILD.css'
import React from 'react'

const TitleX = ({theme , name}) => {
  return (
    <div className='tx-main big-bar'>
        <div className={`tx-1 sec-f mega-trans ${theme == 'dark' ? 'fontclD' : 'fontcl'}`}>{name}</div>
        <div className={`${theme == 'dark' ?'tx-2D' :'tx-2'} sec-f mega-trans`}>{name}</div>
        <div className={`${theme == 'dark' ?'tx-2D' :'tx-2'} sec-f mega-trans`}>{name}</div>
    </div>
  )
}

export default TitleX