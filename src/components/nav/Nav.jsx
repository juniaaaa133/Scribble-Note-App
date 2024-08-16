import React, { useContext, useEffect, useState } from 'react'
import './index.css'
import { CiMenuBurger } from 'react-icons/ci';
import { RxCross1 } from 'react-icons/rx';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { UserContext } from '../../context/userContext';
import { api } from '../../../utils/api';
import useSignOut from '../../../utils/hooks/useSignOut';
import { AuthContext } from '../../context/authContext';

const Nav = () => {

  let [isOpened,setIsOpened] = useState(false);
  let {token} = useContext(UserContext)
  let {user,setUser} = useContext(AuthContext)
  let logout = useSignOut();
  let redirect = useNavigate();
  
  let checkValidToken = async () => {
    let res = await fetch(`${api}/token`,{
      method : "GET",
      headers : {
        "Authorization" : `Bearer ${token}`
      }
    })
    let data = await res.json();
    if(res.status === 401 || res.status === 403){
        return redirect('/login')
    }
    setUser(data)
    // if(user === null && localStorage.getItem('token')){
    //   // localStorage.removeItem('token');
    //   // location.reload();
    //   console.log('user',user)
    // }
    }

    useEffect(()=>{
    checkValidToken();
    },[])

  return (
    <>
    <div className='nv-main bg-white shadow-md'>
        <div className="flex items-center gap-[15px]">
    <CiMenuBurger className='bcu text-[18px] text-black' onClick={()=>setIsOpened(true)}/>
        <h2 className="fontcl2 sys-f text-[20px]">Scribble</h2>
        </div>
        {
          token == null || user == null ?
          <Link to={'/login'} className={`btn1 main-f w-[82px] mega-trans text-[14px]`}>Login</Link>
          :
        <Link to={`/${user.userInfo._id}`} >
        <img src={user.userInfo.pfp ?
           api + '/' + user.userInfo.pfp 
           : 'https://static.vecteezy.com/system/resources/thumbnails/009/292/244/small/default-avatar-icon-of-social-media-user-vector.jpg'} alt="" className='pic w-[30px] h-[30px] rounded-full'  />
        </Link>
        }
    </div>
 <div onClick={()=>setIsOpened(false)} className={` nv-slide-ctn ${isOpened ? 'left-0' : 'left-[-101%]'}`}>
 </div>
 <div className={` bg-white nv-slide-main mega-trans ${isOpened ? 'left-0' : 'left-[-101%]'}`}>
 <div className="flex items-center gap-[15px]">
    <RxCross1 className='bcu text-[18px] text-black' onClick={()=>setIsOpened(false)}/>
        <h2 className="fontcl2 sys-f text-[20px]">Scribble</h2>
        </div>
        <div className="nv-slide-navs">
            <NavLink onClick={()=>setIsOpened(false)} to={`/`} className={`nv-nav sys-f te4xt-[15px] fontclH trans`}>Home</NavLink>
            <NavLink onClick={()=>setIsOpened(false)} to={`/create-notation`} className={`nv-nav sys-f te4xt-[15px] fontclH trans ${!token && "hidden"}`}>Add Notation</NavLink>
            <NavLink onClick={()=>setIsOpened(false)} to={`/${user && user.userInfo && user.userInfo._id }`} className={`nv-nav sys-f te4xt-[15px] fontclH trans ${!token && "hidden"}`}>My Account</NavLink>
            <NavLink onClick={()=>setIsOpened(false)} to={`/login`} className={`nv-nav sys-f te4xt-[15px] fontclH trans ${token && "hidden"}`}>Login</NavLink>
            <div onClick={()=>{
              setIsOpened(false)
              logout()
              location.reload()
            }} className={`nv-nav sys-f te4xt-[15px] fontclH trans bcu ${token == null && "hidden"}`}>Logout</div>
        </div>
</div>
    </>
  )
}

export default Nav