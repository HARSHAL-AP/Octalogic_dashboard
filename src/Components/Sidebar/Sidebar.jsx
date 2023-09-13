import React from "react";
import logo from "../../Asets/logo.png";
import Styles from "./Sidebar.module.css";
import {MdOutlineDashboard,MdOutlineQueueMusic,MdLogout} from "react-icons/md"
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
  const navigate=useNavigate()
  return (
    <div className={Styles.sidebar}>
      <img src={logo} alt=""  className={Styles.logo}/>
      <div className={Styles.navlinkcontaner} >
        <div className={Styles.linkbutons} onClick={()=>navigate("/")}>
       <MdOutlineDashboard className={Styles.homelcon}/>
       <p className={Styles.homelcondesc}>Home</p>
        </div>
        <div className={Styles.linkbutons2}  onClick={()=>navigate("/course")}>
        <MdOutlineQueueMusic className={Styles.homelcon2}/>
       <p className={Styles.homelcondesc2}>Courses</p>
        </div>
      </div>
      <div className={Styles.logoutbuton2}>
        <MdLogout  className={Styles.homelcon2}/>
        <p className={Styles.homelcondesc2}>Logout</p>
      </div>
    </div>
  );
};

export default Sidebar;
