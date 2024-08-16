import React, { useContext, useEffect, useRef, useState } from 'react'
import './index.css'
import { IoIosArrowRoundBack } from "react-icons/io";
import { RiImageAddLine } from "react-icons/ri";
import { TbPhotoEdit } from "react-icons/tb";
import { Field, Form, Formik } from 'formik';
import * as Yup from 'yup'
import ErrorLine from './ErrorLine';
import { api } from '../../../utils/api';
import { useLoaderData, useNavigate, useParams } from 'react-router';
import { UserContext } from '../../context/userContext';
import useCheckToken from '../../../utils/hooks/useCheckToken';

const NoteForm = ({create}) => {

    let {token} = useContext(UserContext)
    let imageFileInput = useRef();
    let cacheData = useLoaderData() || null;
    let redirect = useNavigate();
    let {id} = useParams();
    let [selectedImage,setSelectedImage] = useState(null);
    let [resError,setResError] = useState(null)
    let check = useCheckToken();
    let formData = new FormData();

    const fileExt = ['image/jpg','image/jpeg','image/png']
    let validateNotationSchema = Yup.object().shape({
        title : Yup.string()
        .required('Title field must not be empty!'),
        document : Yup.string()
        .required('Document field must not be empty!'),
        // coverImage : Yup.mixed().nullable().test(
        //     "FILE_FORMAT",
        //     "File type is not supported!",
        //     (value) => value && fileExt.includes(value.type) 
        //     )
    })

    useEffect(()=>{
        check();
    },[])

    let showImage = (e,setFieldValue) => {
    let img =e.target.files[0];
    let imageUrl = URL.createObjectURL(img);
    setSelectedImage(imageUrl);
    setFieldValue('coverImage',img)
    }
    let removeShownImage = (setFieldValue) => {
        setSelectedImage(null);
        setFieldValue(null);
        imageFileInput.current.value = null;
    }

    let handleSubmit = async (values) => {
        let {title, document,coverImage} = values;

        formData.append('title',title);
        formData.append('document',document);
        formData.append('coverImage',coverImage);

        if(!create){
            let res = await fetch(`${api}/notations/${id}`,{
                  method: "PATCH",
                  body: formData,
                  headers : {
                    "Authorization" : `Bearer ${token}`
                  }
            })
            let data = await res.json();
            if(res.ok){
               return redirect('/')
            }
        }else{
            let res = await fetch(`${api}/notations`,{
                method: "POST",
                body: formData,
                headers : {
                  "Authorization" : `Bearer ${token}`
                }
          })
          let data = await res.json();
          if(res.ok){
             return redirect('/')
          }
        }
    }

    if(create){
        return (
            <div className="fm-main">
        <div className="fm-title-ctn">
        <IoIosArrowRoundBack className='text-[20px]'/>
        <h2 className='fontcl text-[16px] main-f'>Create a notation</h2>
        </div>
        <Formik
        initialValues={{
             title : 'Untitled Project',
            document : '',
        }}
        onSubmit={handleSubmit}
        validationSchema={validateNotationSchema}
        >
     {
        ({errors,touched,setFieldValue,isSubmitting})=>(
            <Form className='fm-form text-left' method='POST' encType='multipart/form-data'>
            <div className="fm-inp-ctn ">
                <label htmlFor="title" className='fontcl3 text-[16px] main-f'>Add title</label>
                <Field type="text" id='title' name='title' className='fontcl text-[16px] main-f w-full inp' />
                {
                 errors.title && touched.title && <ErrorLine name='title' />
                }
            </div>
            <div className="fm-inp-ctn">
                <label htmlFor="document" className='fontcl3 text-[16px] main-f'>Write document</label>
                <Field as="textarea" type="text" id='document' name='document' className='fontcl text-[16px] h-[250px] main-f w-full inp'/ >
                {
                 errors.document && touched.document && <ErrorLine name='document' />
                }
            </div>
            <div className="fm-inp-ctn">
            <div className="fm-img-title-ctn main-f">
                <p className='fontcl3 text-[16px] '>Add Cover Photo (Optional)</p>
                <button type="button" onClick={()=>removeShownImage(setFieldValue)} className={`fm-img-btn text-[12px] ${selectedImage ? 'block' : 'hidden'}`}>Cancel</button>
                </div>
                <input onChange={(e)=>showImage(e,setFieldValue)} type="file" ref={imageFileInput} hidden id='image' name='image' className='fontcl text-[16px] h-[250px] main-f w-full inp'/ >
                {
                    selectedImage ?
                    <div onClick={()=>imageFileInput.current.click()} className="file-img-ctn bcu">
                        <TbPhotoEdit className='text-[36px] z-[2] text-white absolute top-0 left-0 right-0 bottom-0 m-auto w-fit h-fit'/>
                        <img src={selectedImage} alt="" className='file-img pic'/>
                    </div>
                    :
                    <div type='button' onClick={()=>imageFileInput.current.click()} className="relative bcu file-main">
                <RiImageAddLine className='text-[36px] fontcl3 absolute top-0 left-0 right-0 bottom-0 m-auto w-fit h-fit'/>
                </div>
                }
                {
                 errors.coverImage && touched.coverImage && <ErrorLine name='coverImage' />
                }
            </div>
            <button disabled={isSubmitting} type='submit' className='btn1 main-f trans w-fit'>{isSubmitting ? "Creating" : "Create notation" }</button>
        </Form>
        )
     }
        </Formik>
        
         </div>
        )
    }else{
        return (
            <div className="fm-main">
            <div className="fm-title-ctn">
            <IoIosArrowRoundBack className='text-[20px]'/>
            <h2 className='fontcl text-[16px] main-f'>Edit notation</h2>
            </div>
            <Formik
        initialValues={{
             title :cacheData.title,
            document : cacheData.document
        }}
        onSubmit={handleSubmit}
        validationSchema={validateNotationSchema}
        >
     {
        ({errors,touched,setFieldValue,isSubmitting})=>(
            <Form className='fm-form text-left' action="">
            <div className="fm-inp-ctn ">
                <label htmlFor="title" className='fontcl3 text-[16px] main-f'>Add title</label>
                <Field type="text" id='title' name='title' className='fontcl text-[16px] main-f w-full inp' />
                {
                 errors.title && touched.title && <ErrorLine name='title' />
                }
            </div>
            <div className="fm-inp-ctn">
                <label htmlFor="document" className='fontcl3 text-[16px] main-f'>Write document</label>
                <Field as="textarea" type="text" id='document' name='document' className='fontcl text-[16px] h-[250px] main-f w-full inp'/ >
                {
                 errors.document && touched.document && <ErrorLine name='document' />
                }
            </div>
            <div className="fm-inp-ctn">
                <div className="fm-img-title-ctn main-f">
                <p className='fontcl3 text-[16px] '>Add Cover Photo (Optional)</p>
                <button type="button" onClick={()=>removeShownImage(setFieldValue)} className={`fm-img-btn text-[12px] ${selectedImage ? 'block' : 'hidden'}`}>Cancel</button>
                </div>
                <input onChange={(e)=>showImage(e,setFieldValue)} type="file" ref={imageFileInput} hidden id='image' name='image' className='fontcl text-[16px] h-[250px] main-f w-full inp'/ >
                {
                    selectedImage ?
                    <div onClick={()=>imageFileInput.current.click()} className="file-img-ctn bcu">
                        <TbPhotoEdit className='text-[36px] z-[2] text-white absolute top-0 left-0 right-0 bottom-0 m-auto w-fit h-fit'/>
                        <img src={selectedImage} alt="" className='file-img pic'/>
                    </div>
                    :cacheData.coverImage && !selectedImage ?
                    <div onClick={()=>imageFileInput.current.click()} className="file-img-ctn bcu">
                        <TbPhotoEdit className='text-[36px] z-[2] text-white absolute top-0 left-0 right-0 bottom-0 m-auto w-fit h-fit'/>
                        <img src={`${api}/${cacheData.coverImage}`} alt="" className='file-img pic'/>
                    </div>
                    :
                    <div type='button' onClick={()=>imageFileInput.current.click()} className="relative bcu file-main">
                <RiImageAddLine className='text-[36px] fontcl3 absolute top-0 left-0 right-0 bottom-0 m-auto w-fit h-fit'/>
                </div>
                }
                {
                 errors.coverImage && touched.coverImage && <ErrorLine name='coverImage' />
                }
            </div>
            <button disabled={isSubmitting} type='submit' className='btn1 main-f trans w-fit'>{isSubmitting ? "Updating" : "Change notation" }</button>
        </Form>
        )
     }
        </Formik>
             </div>
        )
    }
  
}

export default NoteForm

export const formLoader = async ({params,request}) => {
const data = await fetch(`${api}/notations/${params.id}`)
const cacheData = await data.json();
return cacheData;
}