import React, { useContext, useEffect, useState } from 'react'
import './index.css'
import { api } from '../../../utils/api'
import { useNavigate, useParams } from 'react-router'
import { UserContext } from '../../context/userContext'
import NoteCtn from '../../components/notes/NoteCtn'
import useDate from '../../../utils/hooks/useDate'
import { IoCameraOutline } from "react-icons/io5";
import CustomizePfp from '../../components/pfp-setting/CustomizePfp'

const MyAccount = () => {

const {id} = useParams();
const {token} = useContext(UserContext)
let redirect = useNavigate();
let [userData,setUserData] = useState([]);
let [isOpened,setIsOpened] = useState(false);

const fetchUser = async () => {
    const res = await fetch(`${api}/users/${id}`,{
        headers : {
            "Authorization" : `Bearer ${token}`
        }
    })
    let data = await res.json();
    if(!res.ok){
        return redirect('/')
    }
    setUserData(data);
}

useEffect(()=>{
    fetchUser();
},[])

  return (
    userData.length === 0 ?
<div className='w-fit h-fit m-auto fixed top-0 left-0 right-0 bottom-0 text-[20px] fontcl2 sys-f'>Loading</div>
    :
<>
<div className='ac-main'>
        <div className="ac-pfp-main">
            {
            userData.user.pfp ?
            <img src={`${api}/${userData.user.pfp}`} alt="" className="pic ac-pfp" />
            :
            <div className="ac-pfp ac-de-pfp relative">
                <IoCameraOutline className='absolute top-0 bottom-0 left-0 right-0 m-auto w-fit h-fit fontcl text-[20px]' />
            </div>
            }
            <div className="ac-pfp-info">
    <h2 className="fontcl main-f text-[28px] font-[600]">{userData.user.username}</h2>
    <h2 className="fontcl3 main-f text-[15px]">{userData.user.email}</h2>
    <h2 className="fontcl2 main-f text-[15px]">Joined {useDate(userData.user.createdAt)}</h2>
   {
    userData.isAdmin &&
    <div className="ac-btn-ctn">
    <button onClick={()=>setIsOpened(true)} className="btn1 mega-trans main-f text-[15px]">Customize Account</button>
</div>

   }
            </div>
        </div>
        <div className="line"></div>
        <div className="ac-note-main">
        <h2 className="fontcl main-f text-[20px] font-[600]">Notations</h2>
        {
            userData.user.notations?
            <NoteCtn account={userData.user} noteData={userData.user.notations} />
            :
<div className='w-fit h-fit m-auto fixed top-0 left-0 right-0 bottom-0 text-[20px] fontcl2 sys-f'>Loading</div>
        }
        </div>
    </div>
    {
        isOpened && <CustomizePfp
         account={userData.user}
         setIsOpened={setIsOpened}
          />
    }
</>
  )
}

export default MyAccount
