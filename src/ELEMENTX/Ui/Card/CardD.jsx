import React from 'react'
import '../../BUILD.css'
import { NavLink } from 'react-router-dom'

const CardD = ({price = 269,percent = 81  , type = 'special',isInstock = false,name,img}) => {
  return (
    <NavLink to='/shop/2' className='cd-ctn'>
      <div className="relative w-full">
{
  isInstock == true ? 
  <div></div>
                    :
  <div className="cd-avail-ctn badge-cl text-[13px] main-f font-[500] bg-main">SOLD OUT</div>

}
{
  percent == 0 ? 
  <div></div>
              :
  <div className="cd-percent text-[13px] sec-f font-[400] bg-main">{percent}%</div>

}
      <img src={require(`../../../images/${img}`)} alt="" className='pic cd-img' />
    
      </div>
      <div className="cd-title font-[500] sec-f font-cl text-center">{name}</div>
 {
  percent !== 0 ?
  <div className='flex flex-col gap-[5px]'>
  <div className="cd-price sec-f font-cl font-[400] line-through">{price}Ks</div>
  <div className="cd-price sec-f font-cl font-[400]">{Math.trunc(price - (price*percent/100))}Ks</div>
  </div>
                  :
<div className="cd-price sec-f font-cl font-[500]">{price}Ks</div>
 }
 {
  type == 'original' ?
  <div className="cd-type sec-f">ORIGINAL</div>
  : type == 'limited' ?
  <div className="cd-type-limited sec-f">LIMITED EDITION</div>
  : 
  <div className="cd-type-spec sec-f">SPECIAL</div>
 }
    </NavLink>
  )
}

export default CardD