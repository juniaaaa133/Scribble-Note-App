import React from 'react'
import './index.css'
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

const Pagination = ({
  handlePage,
  page,
  limit,
  notePages
}) => {

  let handlePagination = (isPrev) => {
    if(isPrev){
      if(page <= 1){
        return;
      }
      handlePage(page - 1)
    }else{
      if(page >= notePages){
        return;
      }
      handlePage(page + 1)
    }
    // window.location.reload();
  }

  return (
    <div className='pag-ctn'>
        <div onClick={()=>handlePagination(true)} className={`pag-point fontcl2 sys-f bcu ${page <= 1 && 'opacity-[.4]'}`}>
            <IoIosArrowBack className='text-[25px] ' />
            <p className=" text-[15px]">Preview</p>
        </div>
    <div className="pag-no-ctn bg-sec">
    <div className="pag-no  sys-f text-[16px] fontclD">{page}</div>
    </div>
        <div onClick={()=>handlePagination(false)} className={`pag-point fontcl2 sys-f bcu ${page >= notePages && 'opacity-[.4]'}`}>
            <p className=" text-[15px]">Next</p>
            <IoIosArrowForward className='text-[25px] ' />
        </div>        
    </div>
  )
}

export default Pagination