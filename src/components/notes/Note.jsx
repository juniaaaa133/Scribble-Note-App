import React, { useContext, useState } from 'react'
import './index.css'
import CtaMenu from '../cta-menu/CtaMenu'
import { CiStar } from "react-icons/ci";
import { TiStarFullOutline } from "react-icons/ti";
import useDate from '../../../utils/hooks/useDate';
import { api } from '../../../utils/api';
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/authContext';

const Note = ({note,account}) => {

    let {user} = useContext(AuthContext)
    let date = useDate(note.createdAt)

    return (
<Link to={`/notation/${note._id}`} className='nt-main bg-ter relative'>
        <div className="nt-upper-info">
        <div className="nt-info-ctn1">
            <h2 className='text-left w-[90%] fontcl sec-f text-[24px]'>{note.title.length > 40 ? note.title.substring(0,40) + '...' : note.title}</h2>
            <Link>
            {
               user.userInfo && account._id == user.userInfo._id && <CtaMenu hide={user ? account._id !== user.userInfo._id && true : true} _id={note._id} />
            } 
            </Link>
        </div>
        <p className='fontcl3 text-left sec-f text-[16px]'>{note.document.length > 110 ? note.document.substring(0,110) + '...' : note.document}</p>
        </div>
            <div className="nt-bot-ctn">
                <Link to={`/${account._id}`}>
            <img className='pic nt-pfp pics w-[30px] h-[30px] rounded-full bcu ' src={account.pfp ? api + '/' + account.pfp : 'https://static.vecteezy.com/system/resources/thumbnails/009/292/244/small/default-avatar-icon-of-social-media-user-vector.jpg'} alt="" />
                </Link>
            <p className=" text-left nt-time fontcl6 s'ec-f text-[14px]">{date}</p>
            </div>
    </Link>

  )
}

export default Note