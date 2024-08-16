import React from 'react'
import '../../styles/badge.css';

const BadgeX = ({txt}) => {
  return (
    <div className='badge-ctn'>
        <div className="badge-layer1 badge-layer"></div>
        <div className="badge-layer2 badge-layer"></div>
        <div className="badge-layer3 badge-layer"></div>
        <div className="badge-layer4 badge-layer"></div>
        <div className="badge sec-f font-cl">{txt.toUpperCase()}</div>
    </div>
  )
}

export default BadgeX