import React, { useContext, useState } from 'react'
import './index.css'
import { BsThreeDots } from "react-icons/bs";
import { CiEdit } from "react-icons/ci";
import { BsArchive } from "react-icons/bs";
import { AiOutlineDelete } from "react-icons/ai";
import { RxCross2 } from "react-icons/rx";
import { Link, useNavigate, useNavigation } from 'react-router-dom';
import { api } from '../../../utils/api';
import { UserContext } from '../../context/userContext';

const CtaMenu = ({_id,hide}) => {

  let {token} = useContext(UserContext)
  let [isOpened,setIsOpened] = useState(false);
  let redirect = useNavigate();

  let handleDeleteNote = async () => {
    let res = await fetch(`${api}/notations/${_id}`,{
        method : "DELETE",
        headers : {
          "Authorization" : `Bearer ${token}`
        }
    })
    if(res.ok) {
       redirect('/')
       location.reload()
    }
}

  return (
    <div className={`menu-main relative w-fit h-fit ${hide && 'hidden'}`}>
    <div className={`menu-op z-[3] shadow-md absolute top-[27px] right-[-10px] flex-col gap-[2px] ${!isOpened ? 'hidden' : 'flex'}`}>
      <Link to={`/edit-notation/${_id}`} className={`menu-icn-ctn flex items-center gap-[10px] bcu h-[40px] trans fontcl px-[20px] py-[10px]`}>
    <CiEdit className={`text-[18px]`} />
    <p  className='sys-f  text-[15px]'>Edit</p>
      </Link>
      <div onClick={handleDeleteNote} className={`menu-icn-ctn flex items-center gap-[10px] bcu h-[40px] trans fontcl px-[20px] py-[10px]`}>
    <AiOutlineDelete className={`text-[18px]`} />
    <p className='sys-f  text-[15px]'>Delete</p>
      </div>
    </div>
    {
      isOpened ?
      <RxCross2 onClick={()=>setIsOpened(false)} className='text-[18px] fontcl bcu'/>
      :
      <BsThreeDots onClick={()=>setIsOpened(true)} className='text-[18px] fontcl bcu'/>
    }
    </div>
  )
}

export default CtaMenu