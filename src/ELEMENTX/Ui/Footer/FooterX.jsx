import React from 'react'
import '../../BUILD.css'

const FooterX = () => {
  return (
    <div className='ft-ctn '>
        <div className="ft-nav-ctn">
            <div className="ft-nav">
                <div className='sec lg-f text-[16px] ' to='/'>HOME</div>
                <div className='sec lg-f text-[16px] ' to='/shop'>SHOP</div>
                <div className='sec lg-f text-[16px] ' to='/about'>ABOUT</div>
                <div className='sec lg-f text-[16px] ' to='/contact'>CONTACT</div>

            </div>
        </div>
        <div className="flex gap-[13px] items-center ft-brand-ctn absolute bottom-[10px] m-auto right-[0] left-[0] w-fit h-fit text-white">
            <div className="text-[14px] lg-f">© </div>
            <div className="logo text-[12px] font-[400] sec-f w-fit h-fit flex items-center gap-[10px]"><div>ICONIC</div><div className='logo-line'></div><div className=' text-[12px] font-[400] sec-f'>PRESENTS</div></div>
        </div>
    </div>
  )
}

export default FooterX