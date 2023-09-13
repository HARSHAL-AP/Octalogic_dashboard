import React,{useEffect, useState} from 'react'
import Styles from "./Row.module.css"
import {BiDotsVerticalRounded} from "react-icons/bi"
import { useDispatch ,useSelector} from "react-redux";
import axios from "axios";
import {coursedata} from "../../Redux/Coursereducer/action"

const Actionbutton = ({ob}) => {
    const [isopen,setisopen]=useState(false)
    const dispatch=useDispatch()


    const handleclose=() => {
      axios.patch(`https://capil.onrender.com/course/${ob.id}`,{
        ...ob,
        isactive:false
      }).then((r)=>{
         alert("course Closed ....")
         dispatch(coursedata())
         setisopen(!isopen)
      }).catch((e)=>{
        console.log(e)
        alert("Error ....")
        setisopen(!isopen)

      })

    }

    const handlearchive=() => {
      axios.patch(`https://capil.onrender.com/course/${ob.id}`,{
        ...ob,
        isarchive:!ob.isarchive,
        
      }).then((r)=>{
         alert("course Archived ....")
         dispatch(coursedata())
         setisopen(!isopen)
      }).catch((e)=>{
        console.log(e)
        alert("Error ....")
        setisopen(!isopen)

      })


    }
  return (
    <>
    <div onClick={()=>setisopen(!isopen)}>
     <BiDotsVerticalRounded/>
     {isopen&& <div className={Styles.popup2}>
         {!ob.isarchive&& <h3 >Edit Course</h3>}
         {!ob.isarchive&& <h3 onClick={handleclose}>Close Course</h3>}
          <h3 onClick={handlearchive}>{ob.isarchive?"Unarchive":"Archive"} Course</h3>
     </div>}
    </div>
   { isopen&&<div className={Styles.popup}>

    </div>
    }
    
    </>
  )
}

export default Actionbutton