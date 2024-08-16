'use client'
import React, { useContext } from 'react'
import '../../BUILD.css'
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaSnapchat } from "react-icons/fa6";
import { FaThreads } from "react-icons/fa6";
import { FaTelegramPlane } from "react-icons/fa";
import { FaPinterestP } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { useTheme } from 'next-themes';


const IconX = ({type ,url}) => {

  let {theme} = useTheme();

  return (
    <a href={url} className='mega-trans icn-a p-[8px]'>
        { 
           type =='facebook' ?
        <FaFacebookF className={`mega-trans text-[50px] icn_a ${theme == 'dark' ? 'fontclDH':'fontclH'}`}/>
            : type == 'instagram' ?
            <FaInstagram className={`mega-trans text-[50px] icn_a ${theme == 'dark' ? 'fontclDH':'fontclH'}`}/>
:type == 'telegram' ?
            <FaTelegramPlane className={`mega-trans text-[50px] icn_a ${theme == 'dark' ? 'fontclDH':'fontclH'}`}/>
:type == 'x' ?
<FaXTwitter className={`mega-trans  text-[50px] icn_a ${theme == 'dark' ? 'fontclDH':'fontclH'}`}/>
:type == 'snapchat' ?
<FaSnapchat className={`mega-trans  text-[50px] icn_a ${theme == 'dark' ? 'fontclDH':'fontclH'}`}/>
:type == 'threads' ?
<FaThreads className={`mega-trans  text-[50px] icn_a ${theme == 'dark' ? 'fontclDH':'fontclH'}`}/>
:type == 'tiktok' ?
<FaTiktok className={`mega-trans  text-[50px] icn_a ${theme == 'dark' ? 'fontclDH':'fontclH'}`}/>
:type == 'linkedin' ?
<FaLinkedinIn className={`mega-trans  text-[50px] icn_a ${theme == 'dark' ? 'fontclDH':'fontclH'}`}/>
:
<FaPinterestP className={`mega-trans  text-[50px] icn_a ${theme == 'dark' ? 'fontclDH':'fontclH'}`}/>
        }
    </a>

  )
}

export default IconX