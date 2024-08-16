import React from 'react'
import InputR from '../ELEMENTX/Ui/Input/InputR'
import ButtonC from '../ELEMENTX/Ui/Buttons/ButtonC'

const Contact = () => {
  return (
<form className='cot-main-ctn'>
        <div className="cot-intro">
        <div className="cot-title sec text-[13px] sec-f font-cl">CONTACT US</div>
        <div className="cot-desc text-[29px] font-cl sec-f">Ask anything you want to know</div>
        </div>
        <div className="bar"></div>
        <div className="cot-input-field">
            <div className="cot-input">
                <div className="cotinp-title">Name</div>
                <div className="cotinp">
                    <InputR Type={'text'} Place={'Your Name'}/>
                </div>
            </div>
            <div className="cot-input">
                <div className="cotinp-title">Email</div>
                <div className="cotinp">
                    <InputR Type={'email'} Place={'Email Address'}/>
                </div>
            </div>
            <div className="cot-input">
                <div className="cotinp-title">Message</div>
                <div className="cotinp">
<textarea className='cotarea text-[14px] font-cl sec-f' placeholder='Message'></textarea>
                </div>
            </div>
        </div>
        <div className="cotbtn">
            <ButtonC text={'submit '}/>
        </div>
    </form>
  )
}

export default Contact