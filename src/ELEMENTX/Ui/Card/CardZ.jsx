import React from 'react'
import '../../BUILD.css'

const CardZ = ({img,text}) => {
  return (
    <div className='cz-ctn'>
      <div className="cz-layer"></div>
        <div className="cz-txt sec-f text-[20px] font-[500] font-cl">{text.toUpperCase()}</div>
<img src='https://i.pinimg.com/236x/23/26/ee/2326ee943e98c2e4ab4c30f97c64fc09.jpg' className='mega-trans cz-img pic' alt="" />
    </div>
  )
}

export default CardZ