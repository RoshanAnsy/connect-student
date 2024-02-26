import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router'

function OpenRoutes({children}){
    const {token}=useSelector((state)=>state.auth)
    if(token===null)
        return children
    else 
        return <Navigate to="/"/>
}

export default OpenRoutes;
