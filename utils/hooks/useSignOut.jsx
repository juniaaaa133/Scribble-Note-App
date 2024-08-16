import React, { useContext } from 'react'
import { UserContext } from '../../src/context/userContext'
import { useNavigate } from 'react-router'

const useSignOut = () => {

const {token,defineToken} = useContext(UserContext)
let redirect = useNavigate();
if(!token) return

  return () => {
    localStorage.removeItem('token')
    defineToken(null)
    console.log('redirected')
     redirect('/')
  }
}

export default useSignOut