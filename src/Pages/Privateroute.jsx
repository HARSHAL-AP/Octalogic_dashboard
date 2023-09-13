import React from 'react'
import { Navigate } from 'react-router-dom'

 const Privateroute = ({children}) => {
    const user=JSON.parse(localStorage.getItem("isAuth"))||true

    if(!user){
      return <Navigate to="/login"/>
    }
  
    return children
}
export default Privateroute