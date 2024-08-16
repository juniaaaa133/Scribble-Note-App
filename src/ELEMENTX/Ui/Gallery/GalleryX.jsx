import React from 'react'
import '../../BUILD.css'
import { useNavigate } from 'react-router';

const GalleryX = ({style,badge,imgPath}) => {
  let navigate = useNavigate();

let ImageFn = () => {
  navigate(`/imageView/${imgPath}`);
}
  return (
    <div onClick={ImageFn} className={`gx-ctn ${style}`}>
        <div className="gx-badge badge-cl lg-f mega-trans">{badge.toUpperCase()} </div>
        <div className="gx-layer mega-trans"></div>
        <div className="gx-img-ctn ">
            <img src={require(`../../../images/${imgPath}`)} alt="" className='gx-img pic mega-trans'/>
        </div>
    </div>
  )
}

export default GalleryX