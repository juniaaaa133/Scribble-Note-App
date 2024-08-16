import React, { useContext, useRef, useState } from 'react'
import './index.css'
import { Field, Form, Formik } from 'formik'
import { TbPhotoEdit } from 'react-icons/tb'
import { RiDeleteBack2Line, RiDeleteBin2Line, RiImageAddLine } from 'react-icons/ri'
import * as Yup from 'yup'
import ErrorLine from '../forms/ErrorLine'
import { api } from '../../../utils/api'
import { useNavigate, useParams } from 'react-router'
import { UserContext } from '../../context/userContext'

const CustomizePfp = ({setIsOpened,account}) => {

    let pfpInput = useRef(null)
    let [selectedImage,setSelectedImage] = useState(null);
    let [resError,setResError] = useState(null);
    let {id} = useParams();
    let {token} = useContext(UserContext)
    let redirect = useNavigate();
    let formData = new FormData();

    let validatePfpSchema = Yup.object().shape({
        username : Yup.string()
        .required('Username must not be empty.'),
    })

    let showImage = (e,setFieldValue) => {
    let image = e.target.files[0];
    const imageUrl = URL.createObjectURL(image);
    setSelectedImage(imageUrl)
    setFieldValue('pfp',image)
    }

    let deleteImage = (setFieldValue) => {
        pfpInput.current.value = null;
        setFieldValue(null);
        setSelectedImage(null)
        setResError(null)
    }

    let handleSubmit = async (values) => {
        formData.append('username',values.username);
        if(typeof values.pfp !== String){
            formData.append('pfp',values.pfp);
        }

    let res = await fetch(`${api}/users/${id}`,{
        method : "PATCH",
        body : formData,
        headers : {
            "Authorization" : `Bearer ${token}`
        }
    })
    let data = await res.json();
    if(!res.ok){
       return setResError(data.message)
    }
    setIsOpened(false)
    location.reload();
    }

    return (
    <>
    <div onClick={()=>setIsOpened(false)} className='cp-main'></div>
    <div className="cp-ctn bg-white">
    <Formik 
    initialValues={{
        username : account.username,
        pfp : account.pfp
    }}
    validationSchema={validatePfpSchema}
    onSubmit={handleSubmit}
    >
    {  
        ({errors,touched,setFieldValue,isSubmitting})=>(
            <Form className='flex flex-col gap-[10px] px-[40px] py-[20px]'>
            <div className="flex flex-col gap-[10px]">
                <div className="flex justify-between">
            <div className="flex items-center gap-[10px]">
            <p className='fontcl3 text-[16px]'>Add Profile Picture</p>
            {
             pfpInput.current && pfpInput.current.value &&
            <RiDeleteBin2Line onClick={()=>deleteImage(setFieldValue)} className='bcu text-red-500 text-[16px]'/>
            }
            </div>
                <button type='submit' disabled={isSubmitting} className={`btn1 trans text-[12px]`}>{isSubmitting ? "Saving" : "Save"}</button>
                </div>
                <input onChange={(e)=>showImage(e,setFieldValue)} name='pfp' ref={pfpInput} type="file" hidden  />
                {
                    selectedImage?
                    <div onClick={()=>pfpInput.current.click()} className="pc-file-main bcu">
                        <img src={selectedImage} alt="" className='pic pc-file-main pic'/>
                    </div>
                    : account.pfp ?
                    <div onClick={()=>pfpInput.current.click()} className="pc-file-main bcu">
                        <img src={api + '/' + account.pfp} alt="" className='pic pc-file-main pic'/>
                    </div>
                    : 
                    <div type='button' onClick={()=>pfpInput.current.click()} className="bg-[#cfcfcf] relative bcu pc-file-main">
                <RiImageAddLine className='text-[36px] fontcl3 absolute top-0 left-0 right-0 bottom-0 m-auto w-fit h-fit'/>
                </div>
                }
            </div>
            {
                resError && <ErrorLine value={resError}/>
            }
             <div className="fm-inp-ctn">
                <label htmlFor="username" className='fontcl3 text-[16px] main-f'>Change Name</label>
                <Field as="input" type="text" id='username' name='username' className='fontcl text-[16px] h-[40px] main-f w-full inp'/ >
                {
                 errors.username && touched.username && <ErrorLine name='username' />
                }
            </div>
            </Form>
        )
    }
    </Formik>
    </div>
    </>
  )
}

export default CustomizePfp