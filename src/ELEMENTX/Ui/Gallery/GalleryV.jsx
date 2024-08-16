import React, { useContext, useEffect, useState } from 'react'
import '../../BUILD.css'
import { imageCollection } from '../../../features/imgSrc';
import { useNavigate, useParams } from 'react-router';

const GalleryV = () => {

let [image,setImage] = useState();
let navigate = useNavigate();
let {imageId} = useParams();
// let [img,setImg] = useState('');

let BackFn = () => {
navigate('/projects');
}

let GetImage = () => {
  console.log(imageId)
  // let filteredImage = imageCollection.filter((data) => (
  //   data.id == imageId
  // ))
  // setImage(filteredImage[0].img);
  // console.log(imageId,filteredImage[0].img,typeof image)

}
GetImage();

  return (
<div className={`relative  `}>
<div onClick={BackFn} className="gv-ctn">
<img src={require(`../../../images/${imageId}`)} alt="" srcset="" className='gv-img pic'/>
</div>
</div>

  )
}

export default GalleryV

