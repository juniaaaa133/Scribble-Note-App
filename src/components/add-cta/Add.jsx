import React, { useContext } from 'react'
import './index.css'
import { Link } from 'react-router-dom'
import { IoAdd } from "react-icons/io5";
import { UserContext } from '../../context/userContext';

const Add = () => {

  let {token} = useContext(UserContext)

  return (
    <Link to='/create-notation' className={`fixed bottom-[15px] bg-sec right-[20px] rounded-full w-fit p-[8px] ${token == null && 'hidden'}`}>
        <IoAdd  className='text-[25px] text-white'/>
    </Link>
  )
}

export default Add