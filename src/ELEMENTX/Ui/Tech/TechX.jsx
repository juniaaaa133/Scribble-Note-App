import React from 'react'
import { IoLogoJavascript } from "react-icons/io";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { TbBrandNextjs } from "react-icons/tb";
import { FaPhp } from "react-icons/fa";
import { FaLaravel } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { FaFigma } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import '../../BUILD.css'

const TechX = ({logo}) => {
  return (
        logo == 'JavaScript' ? 
        <IoLogoJavascript className='tex text-[#EDD61C]'/>
        : logo == 'HTML' || logo == 'HTML5' ?
        <FaHtml5 className='tex text-[#DA4B25]'/>
        : logo == 'CSS' || logo == 'CSS3' ?
        <FaCss3Alt className='tex text-[#3593CE]'/>
        : logo == 'ReactJS' || logo == 'React.JS' ?
        <FaReact className='tex text-[#00CFF5]'/>
        : logo == 'NextJS' || logo == 'Next.JS' ?
        <TbBrandNextjs className='tex text-[#101010]'/>
        : logo == 'PHP' ?
        <FaPhp className='tex text-[#101010]'/>  
        : logo == 'TypeScript' || logo == 'Typescript' ?
        <SiTypescript className='tex text-[#0075C5]'/>
        : logo == 'Laravel' ?
        <FaLaravel className='tex text-[#ED2B18]'/>
        : logo == 'Node.js' || logo == 'NodeJs' ?
        <FaNodeJs className='tex text-[#86C04A]'/>
        : logo == 'Tailwind.css' || logo == 'Tailwind' ?
        <SiTailwindcss className='tex text-[#06AFC6]'/>
        :
        <FaFigma className='tex text-[#2C2F38]'/>

  )
}

export default TechX