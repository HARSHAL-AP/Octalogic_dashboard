import React,{useEffect} from "react";
import Styles from "./Course.module.css";
import Sidebar from "../../Components/Sidebar/Sidebar";
import { BsSearch } from "react-icons/bs";
import Row from "../../Components/Course/Row";
import Addcourse from "../../Components/Course/Addcourse";
import { useDispatch ,useSelector} from "react-redux";
import {coursedata} from "../../Redux/Coursereducer/action"


const Course = () => {
  const dispatch=useDispatch()
const corse=useSelector((store)=>store.coursereducer.course)
  useEffect(()=>{
    if(corse.length===0){
      dispatch(coursedata())
    }
   


  },[corse])
   
  return (
    <>
      <Sidebar />
      <div className={Styles.homedashcon}>
        <h1 className={Styles.headings}>Course</h1>
        <div className={Styles.frame30}>
          <div className={Styles.latestenrolments}>Latest Enrolments </div>
          <div className={Styles.viewallcourses}>
            <BsSearch /> <input type="text" placeholder="Search" />
          </div>
        </div>
        <div className={Styles.tableconter}>
          <div className={Styles.table}>
      <div className={Styles.table2}>
        <div className={Styles.header}>
          <div className={Styles.enrno}>Name </div>
          <div className={Styles.sname}>Description</div>
          <div className={Styles.cname}>Instructor </div>
          <div className={Styles.fees}>Instrument </div>
          <div className={Styles.enrdate}>Day of Week </div>
          <div className={Styles.fees}># of Students </div>
          <div className={Styles.enrdate}>Price </div>
          <div className={Styles.fees}>Status </div>
          <div className={Styles.enrdate}>Actions</div>
        </div>
        <div className={Styles.body}>
         {corse.map((el)=>{
          return <Row key={el.id} obj={el}/>
         })}
         
        </div>
      </div>
    </div>
          </div>
      </div>
      <Addcourse/>
    </>
  );
};

export default Course;
