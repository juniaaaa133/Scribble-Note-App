import React from 'react'
import { IoIosEye } from "react-icons/io";
import { FiGithub } from "react-icons/fi";
import Link from 'next/link';

const ButtonRr = ({text,wh ,url, theme,type}) => {
    return (
      type == 'live' ? 
      <Link href={url} className={`brr-main ${wh}`}>
          <div className={`br-layer mega-trans bg-sec`}></div>
          <div className={`brr-text-ctn mega-trans sec-f text-[13px]  ${theme == 'dark' ? 'fontclD': 'fontcl'}`}>
                <IoIosEye className='brr-txt'/>
            <div className="brr-txt">
                {text}
            </div>
          </div>
          
      </Link>
       : 
       <Link href={url} className={`brr-main2 mega-trans ${wh}`}>
          <div className={`brr-text-ctn2 mega-trans sec-f hover:text-[#de9d04] text-[13px] fontcl2}`}>
                <FiGithub />
            <div className="">
                {text}
            </div>
          </div>
      </Link>
      
    )
  }

export default ButtonRr