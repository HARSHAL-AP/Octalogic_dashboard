import React, { useState } from 'react'
import Styles from "./Login.module.css"
import { useDispatch ,useSelector} from "react-redux";
import { login } from '../../Redux/Authreducer/action';
import { useNavigate } from 'react-router-dom';
const Login = () => {
    const [admin,seadmin]=useState({
        email:"",
        password:""
    })
    const dispatch=useDispatch()
    const navigate=useNavigate()


    const handlelogin=() => {
    
       localStorage.setItem("isAuth", JSON.stringify(true));
       alert("Login Sucsessfull....!")
       navigate("/")
    }  
  return (
    <div className={Styles.loginbody}>
      <h1 className={Styles.heding}>Welcome Admin</h1>
      <input type="email"  placeholder='admin@gmail.com' value={admin.email} onChange={(e)=>seadmin({...admin,email:e.target.value})}/>
      <input type="password" placeholder='admin'  value={admin.password}     onChange={(e)=>seadmin({...admin,password:e.target.value})} />
      <button className={Styles.add} onClick={handlelogin}>Login</button>
    </div>
  )
}

export default Login