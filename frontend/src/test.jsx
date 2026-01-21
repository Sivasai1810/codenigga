import React from 'react'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Test() {
const navigate=useNavigate()
useEffect(()=>{
const params=new URLSearchParams(window.location.search)
const token =params.get("token")
const profile=params.get("profile")
if(token){
  console.log("got the token")
  console.log(profile)
    localStorage.setItem("accessToken",token)
    navigate('/loginsuccess')
}else{
    navigate('/login')
}
},[])

  return (
    <div>
      
    </div>
  )
}
