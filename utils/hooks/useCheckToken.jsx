import React, { useContext } from 'react'
import { UserContext } from '../../src/context/userContext'
import { useNavigate } from 'react-router'
import { api } from '../api'

const useCheckToken = () => {
    let {token} = useContext(UserContext)
    let redirect = useNavigate();

    let checkValidToken = async () => {
        let res = await fetch(`${api}/check-token`,{
            headers : {
                "Authorization" : `Bearer ${token}`
              }
        })
        let data = await res.json();
        if(res.status === 401 || res.status === 403){
            console.log(data)
            return redirect('/login')
        }
        }
        return checkValidToken;
}

export default useCheckToken