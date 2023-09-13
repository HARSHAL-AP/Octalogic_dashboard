import React, { useState } from "react";
import Styles from "./Row.module.css";
import { AiOutlinePlus } from "react-icons/ai";
import {coursedata} from "../../Redux/Coursereducer/action"
import { useDispatch ,useSelector} from "react-redux";
import axios from "axios";

const Addcourse = () => {
  const [course, setcourse] = useState({
    coursename: "",
    courseDescription: "",
    instrument: "",
    instructor: "",
    dayofweak: "",
    nuofStudent: 0,
    price: "",
    isactive: true,
    isarchive: false,
  });
  const [popup, setpopup] = useState(false);
  const dispatch=useDispatch()
  const handleTogle = () => {
    setpopup(!popup);
  };

  const handleadd=() => {
    let data={...course,"id":course.coursename+new Date()}
    axios.post("https://capil.onrender.com/course",data)
    .then((r)=>{
      dispatch(coursedata())
      alert("New Course Added....")
      handleTogle()
    }).catch((e)=>{
      console.log(e)
      alert("Errorr While Creating Course....")
    }
    )
  }
console.log(course)
  return (
    <>
      <div className={Styles.addbuton} onClick={handleTogle}>
        <AiOutlinePlus /> Addcourse
      </div>
      {popup && (
        <div className={Styles.popup}>
          <div className={Styles.modal}>
            <h1>Add Course</h1>
            <input
              type="text"
              placeholder="Course Name"
              value={course.coursename}
              onChange={(e)=>setcourse({...course,coursename:e.target.value})}
            />
            <input
              type="text"
              placeholder="Description"
              value={course.courseDescription}
              onChange={(e)=>setcourse({...course,courseDescription:e.target.value})}
            />
            <input
              type="text"
              placeholder="Instructor"
              value={course.instructor}
              onChange={(e)=>setcourse({...course,instructor:e.target.value})}
            />
            <select name="" id="" value={course.instrument} onChange={(e)=>setcourse({...course,instrument:e.target.value})}>
              <option value="">Instrument</option>
              <option value="piano">Piano</option>
              <option value="guitar">Guitar</option>
              <option value="violin">Violin</option>
              <option value="drums">Drums</option>
              <option value="flute">Flute</option>
              <option value="trumpet">Trumpet</option>
              <option value="saxophone">Saxophone</option>
              <option value="clarinet">Clarinet</option>
              <option value="bass">Bass</option>
              <option value="harp">Harp</option>
            </select>
            <select name="" id="" value={course.dayofweak} onChange={(e)=>setcourse({...course,dayofweak:e.target.value})}>
              <option value="">Day of the week</option>
              <option value="sunday">Sunday</option>
              <option value="monday">Monday</option>
              <option value="tuesday">Tuesday</option>
              <option value="wednesday">Wednesday</option>
              <option value="thursday">Thursday</option>
              <option value="friday">Friday</option>
              <option value="saturday">Saturday</option>
            </select>
            <input type="text" placeholder="Price" value={course.price} onChange={(e)=>setcourse({...course,price:e.target.value})}/>
            <div>
              <button className={Styles.cancel} onClick={handleTogle}>
                Cancel
              </button>
              <button className={Styles.add} onClick={handleadd}>Add Course</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Addcourse;
