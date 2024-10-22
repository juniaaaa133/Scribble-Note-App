import React, { useContext, useState } from 'react'
import './index.css'
import { Field, Form, Formik } from 'formik'
import * as Yup from 'yup'
import { api } from '../../../utils/api'
import { Link, NavLink, useNavigate } from 'react-router-dom';
import ErrorLine from './ErrorLine'
import { UserContext } from '../../context/userContext'

const AuthForm = ({isLogin}) => {

  let {token,defineToken} = useContext(UserContext)
  let [resError,setResError] = useState(null);
  let redirect =  useNavigate();

  let validateRegisterSchema = Yup.object().shape({
    username : Yup.string()
    .required("Username field must not be empty"),
    email :Yup.string()
   .required('Email field must not be empty!')
   .email("Your email is invalid email!"),
   password : Yup.string()
   .required('Password field must not be empty!')
   .min(7,"Password character must at least 7 characters.")
  })

  let validateLoginSchema = Yup.object().shape({
    email :Yup.string()
   .required('Email field must not be empty!')
   .email("Your email is invalid email!"),
   password : Yup.string()
   .required('Password field must not be empty!')
   .min(7,"Password character must at least 7 characters.")
  })

  let handleAuthenticate = async (values) => {

    let route = isLogin ? 'login' : 'register'
    let res = await fetch(`${api}/${route}`,{
        method : "POST",
        body : JSON.stringify(values),
        headers : {
          "Content-Type" : "application/json"
        }
        })
        let data = await res.json();
        if(res.status === 401){
          setResError(data.errors[0].msg)
          return;
        }
         defineToken(data.token)
         redirect('/')
         location.reload();
  }
console.log(api)
  return (
    <div className='auth-ctn z-[8] w-[100%] h-[100vh] fixed top-0 bg-[#F4F0E6]'>

    <p className="main-f fontcl text-[26px]">{isLogin ? 'Login Account' : 'Create a new account'}</p>
    <div className="auth-main bg-[#fff]">
<Formik 
initialValues={{
  username :'',
  email : '',
  password : '',
}}
  validationSchema={isLogin ? validateLoginSchema : validateRegisterSchema}
  onSubmit={handleAuthenticate}
>
{
  ({errors,touched,isSubmitting}) => (
    <Form className='fm-form'  method='POST' encType='application/json'>
      {
        !isLogin &&
        <div className="fm-inp-ctn ">
             <label htmlFor="username" className='fontcl3 text-[16px] main-f'>Enter username</label>
             <Field type="text" id='username' name='username' className='fontcl text-[16px] main-f w-full inp' />
                  {
                   errors.username && touched.username && <ErrorLine name='username' />
                  }
            </div>
      }
      <div className="fm-inp-ctn ">
                  <label htmlFor="email" className='fontcl3 text-[16px] main-f'>Email address</label>
                  <Field type="email" id='email' name='email' className='fontcl text-[16px] main-f w-full inp' />
                  {
                      errors.email && touched.email ?
                      <ErrorLine name='email' />
                      :
                      !isLogin && <ErrorLine value={resError} />
                   }
              </div>
      <div className="fm-inp-ctn ">
             <label htmlFor="password" className='fontcl3 text-[16px] main-f'>{isLogin ? 'Enter Password' : 'Enter New Password' }</label>
             <Field type="password" id='password' name='password' className='fontcl text-[16px] main-f w-full inp' />
                  {
                   errors.password && touched.password ?
                    <ErrorLine name='password' />
                    :
                    isLogin && <ErrorLine value={resError} />
                  }
            </div>
            <button disabled={isSubmitting} type='submit' className='btn1 main-f trans w-fit'>{isSubmitting ? isLogin ?'Logging in' : 'Signing up': isLogin ?  "Login" : "Signup"}</button>
            <div className="flex items-center gap-[5px]">
          <p className="fontcl main-f text-[15px]">{ 
          isLogin ? "Don't have an account?" : "Already have an account?"
   } </p>
  {
    isLogin ? 
    <Link to={`/sign-up`} className='main-f text-[15px] fontcl2'>Sign up</Link>
  :
  <Link to={`/login`} className='main-f text-[15px] fontcl2'>Login</Link>
  
  }
         </div>
         </Form>
  )
}
       
</Formik>
    </div>
    </div>
  )
}

export default AuthForm
