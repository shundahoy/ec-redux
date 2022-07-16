import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { listenAuthState } from './reducks/users/operations'
import { getSignedIn } from './reducks/users/selectors'


const Auth = ({children}) => {
  const selector = useSelector((state)=>state)
  const isSignedIn = getSignedIn(selector)
   const dispatch =  useDispatch();
    useEffect(()=>{
        if(!isSignedIn){
          dispatch(listenAuthState())
        }
    },[])
    if(!isSignedIn){
      return<></>
    }
  return (
    children
  )
}

export default Auth