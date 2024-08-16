import React, { useContext, useState } from 'react'
import '../../BUILD.css'
import GalleryV from './GalleryV'
import { useNavigate } from 'react-router';

const GalleryY = ({img,id}) => {

  let navigate = useNavigate();

let ImageFn = () => {
  navigate(`/imageView/${img}`);
}

  return (
<>
<img onClick={ImageFn} src={require(`../../../images/${img}`)}  alt="" className='bcu gy-img pic mega-trans'/>
</>
    )
}

export default GalleryY