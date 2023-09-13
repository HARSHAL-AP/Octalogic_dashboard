import React,{useEffect} from "react";
import Sidebar from "../../Components/Sidebar/Sidebar";
import Styles from "./Home.module.css";
import { useDispatch ,useSelector} from "react-redux";
import {getenrolments,getstuedntsdata} from "../../Redux/Coursereducer/action"

const Home = () => {
  const dispatch=useDispatch()
  const enrolmenst=useSelector((store)=>store.coursereducer.enrolments)
 const students=useSelector((store)=>store.coursereducer.stuedntsdata)
  useEffect(()=>{
    if(enrolmenst.length===0){
      dispatch(getenrolments())
    }
   if(students.length===0){
    dispatch(getstuedntsdata())
   }


  },[enrolmenst,students])
   

  return (
    <>
      <Sidebar />

      <div>
        <div className={Styles.homedashcon}>
          <h1 className={Styles.headings}>Overview</h1>
          <div className={Styles.overviewscon}>
            <div className={Styles.frame20}>
              <div className={Styles.frame21}>
                <div className={Styles.frame27}>
                  <svg
                    className={Styles.icbaselinepeople}     
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect width="32" height="32" rx="16" fill="#B2EECF" />
                    <path
                      d="M19.6364 15.4545C21.1455 15.4545 22.3546 14.2364 22.3546 12.7273C22.3546 11.2182 21.1455 10 19.6364 10C18.1273 10 16.9091 11.2182 16.9091 12.7273C16.9091 14.2364 18.1273 15.4545 19.6364 15.4545ZM12.3637 15.4545C13.8727 15.4545 15.0818 14.2364 15.0818 12.7273C15.0818 11.2182 13.8727 10 12.3637 10C10.8546 10 9.63638 11.2182 9.63638 12.7273C9.63638 14.2364 10.8546 15.4545 12.3637 15.4545ZM12.3637 17.2727C10.2455 17.2727 6.00002 18.3364 6.00002 20.4545V22.7273H18.7273V20.4545C18.7273 18.3364 14.4818 17.2727 12.3637 17.2727ZM19.6364 17.2727C19.3727 17.2727 19.0727 17.2909 18.7546 17.3182C19.8091 18.0818 20.5455 19.1091 20.5455 20.4545V22.7273H26V20.4545C26 18.3364 21.7546 17.2727 19.6364 17.2727Z"
                      fill="black"
                    />
                  </svg>

                  <div className={Styles.frame35}>
                    <div className={Styles._5600}>164</div>
                    <div className={Styles.from4400lastmonth}>
                      total number of students
                    </div>
                  </div>
                </div>
                <div className={Styles.frame29}>
                  <div className={Styles.view}>View</div>
                </div>
              </div>
            </div>
            <div className={Styles.frame20}>
              <div className={Styles.frame21}>
                <div className={Styles.frame27}>
                  <svg
                    className={Styles.icbaselinepeople}
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect width="32" height="32" rx="16" fill="#B2EECF" />
                    <path
                      d="M19.6364 15.4545C21.1455 15.4545 22.3546 14.2364 22.3546 12.7273C22.3546 11.2182 21.1455 10 19.6364 10C18.1273 10 16.9091 11.2182 16.9091 12.7273C16.9091 14.2364 18.1273 15.4545 19.6364 15.4545ZM12.3637 15.4545C13.8727 15.4545 15.0818 14.2364 15.0818 12.7273C15.0818 11.2182 13.8727 10 12.3637 10C10.8546 10 9.63638 11.2182 9.63638 12.7273C9.63638 14.2364 10.8546 15.4545 12.3637 15.4545ZM12.3637 17.2727C10.2455 17.2727 6.00002 18.3364 6.00002 20.4545V22.7273H18.7273V20.4545C18.7273 18.3364 14.4818 17.2727 12.3637 17.2727ZM19.6364 17.2727C19.3727 17.2727 19.0727 17.2909 18.7546 17.3182C19.8091 18.0818 20.5455 19.1091 20.5455 20.4545V22.7273H26V20.4545C26 18.3364 21.7546 17.2727 19.6364 17.2727Z"
                      fill="black"
                    />
                  </svg>

                  <div className={Styles.frame35}>
                    <div className={Styles._5600}>12</div>
                    <div className={Styles.from4400lastmonth}>
                      total number of courses
                    </div>
                  </div>
                </div>
                <div className={Styles.frame29}>
                  <div className={Styles.view}>View</div>
                </div>
              </div>
            </div>
            <div className={Styles.frame20}>
              <div className={Styles.frame21}>
                <div className={Styles.frame27}>
                  <svg
                    className={Styles.icbaselinepeople}
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect width="32" height="32" rx="16" fill="#B2EECF" />
                    <path
                      d="M19.6364 15.4545C21.1455 15.4545 22.3546 14.2364 22.3546 12.7273C22.3546 11.2182 21.1455 10 19.6364 10C18.1273 10 16.9091 11.2182 16.9091 12.7273C16.9091 14.2364 18.1273 15.4545 19.6364 15.4545ZM12.3637 15.4545C13.8727 15.4545 15.0818 14.2364 15.0818 12.7273C15.0818 11.2182 13.8727 10 12.3637 10C10.8546 10 9.63638 11.2182 9.63638 12.7273C9.63638 14.2364 10.8546 15.4545 12.3637 15.4545ZM12.3637 17.2727C10.2455 17.2727 6.00002 18.3364 6.00002 20.4545V22.7273H18.7273V20.4545C18.7273 18.3364 14.4818 17.2727 12.3637 17.2727ZM19.6364 17.2727C19.3727 17.2727 19.0727 17.2909 18.7546 17.3182C19.8091 18.0818 20.5455 19.1091 20.5455 20.4545V22.7273H26V20.4545C26 18.3364 21.7546 17.2727 19.6364 17.2727Z"
                      fill="black"
                    />
                  </svg>

                  <div className={Styles.frame35}>
                    <div className={Styles._5600}>$2000</div>
                    <div className={Styles.from4400lastmonth}>
                      total amount earned
                    </div>
                  </div>
                </div>
                <div className={Styles.frame29}>
                  <div className={Styles.view}>View</div>
                </div>
              </div>
            </div>
            <div className={Styles.frame20}>
              <div className={Styles.frame21}>
                <div className={Styles.frame27}>
                  <svg
                    className={Styles.icbaselinepeople}
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect width="32" height="32" rx="16" fill="#B2EECF" />
                    <path
                      d="M19.6364 15.4545C21.1455 15.4545 22.3546 14.2364 22.3546 12.7273C22.3546 11.2182 21.1455 10 19.6364 10C18.1273 10 16.9091 11.2182 16.9091 12.7273C16.9091 14.2364 18.1273 15.4545 19.6364 15.4545ZM12.3637 15.4545C13.8727 15.4545 15.0818 14.2364 15.0818 12.7273C15.0818 11.2182 13.8727 10 12.3637 10C10.8546 10 9.63638 11.2182 9.63638 12.7273C9.63638 14.2364 10.8546 15.4545 12.3637 15.4545ZM12.3637 17.2727C10.2455 17.2727 6.00002 18.3364 6.00002 20.4545V22.7273H18.7273V20.4545C18.7273 18.3364 14.4818 17.2727 12.3637 17.2727ZM19.6364 17.2727C19.3727 17.2727 19.0727 17.2909 18.7546 17.3182C19.8091 18.0818 20.5455 19.1091 20.5455 20.4545V22.7273H26V20.4545C26 18.3364 21.7546 17.2727 19.6364 17.2727Z"
                      fill="black"
                    />
                  </svg>

                  <div className={Styles.frame35}>
                    <div className={Styles._5600}>Guitar</div>
                    <div className={Styles.from4400lastmonth}>
                      best performing course
                    </div>
                  </div>
                </div>
                <div className={Styles.frame29}>
                  <div className={Styles.view}>View</div>
                </div>
              </div>
            </div>
            <div className={Styles.frame20}>
              <div className={Styles.frame21}>
                <div className={Styles.frame27}>
                  <svg
                    className={Styles.icbaselinepeople}
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect width="32" height="32" rx="16" fill="#B2EECF" />
                    <path
                      d="M19.6364 15.4545C21.1455 15.4545 22.3546 14.2364 22.3546 12.7273C22.3546 11.2182 21.1455 10 19.6364 10C18.1273 10 16.9091 11.2182 16.9091 12.7273C16.9091 14.2364 18.1273 15.4545 19.6364 15.4545ZM12.3637 15.4545C13.8727 15.4545 15.0818 14.2364 15.0818 12.7273C15.0818 11.2182 13.8727 10 12.3637 10C10.8546 10 9.63638 11.2182 9.63638 12.7273C9.63638 14.2364 10.8546 15.4545 12.3637 15.4545ZM12.3637 17.2727C10.2455 17.2727 6.00002 18.3364 6.00002 20.4545V22.7273H18.7273V20.4545C18.7273 18.3364 14.4818 17.2727 12.3637 17.2727ZM19.6364 17.2727C19.3727 17.2727 19.0727 17.2909 18.7546 17.3182C19.8091 18.0818 20.5455 19.1091 20.5455 20.4545V22.7273H26V20.4545C26 18.3364 21.7546 17.2727 19.6364 17.2727Z"
                      fill="black"
                    />
                  </svg>

                  <div className={Styles.frame35}>
                    <div className={Styles._5600}>Flute</div>
                    <div className={Styles.from4400lastmonth}>
                      worst performing course
                    </div>
                  </div>
                </div>
                <div className={Styles.frame29}>
                  <div className={Styles.view}>View</div>
                </div>
              </div>
            </div>
          </div>
          <div className={Styles.frame30}>
            <div className={Styles.latestenrolments}>Latest Enrolments </div>
            <div className={Styles.viewallcourses}>View All Courses </div>
          </div>
          <div className={Styles.tableconter}>
          <div className={Styles.table}>
      <div className={Styles.table2}>
        <div className={Styles.header}>
          <div className={Styles.enrno}>Enr. No </div>
          <div className={Styles.sname}>S. Name </div>
          <div className={Styles.cname}>C. Name </div>
          <div className={Styles.fees}>Fees </div>
          <div className={Styles.enrdate}>Enr. Date </div>
        </div>
        <div className={Styles.body}>
          <div className={Styles.row}>
            <div className={Styles._1563124}>1563124 </div>
            <div className={Styles.johndoe}>John Doe </div>
            <div className={Styles.percussion}>Percussion </div>
            <div className={Styles._120}>$120 </div>
            <div className={Styles._1208223}>12-08-223 </div>
          </div>
         {enrolmenst.map((el)=>{
          return <div className={Styles.row} key={el.id}>
            <div className={Styles._1563124}>{el.enrollmentNumber }</div>
            <div className={Styles.johndoe}>{el.studentName } </div>
            <div className={Styles.percussion}>{el.courseName } </div>
            <div className={Styles._120}>${el.fees}</div>
            <div className={Styles._1208223}>{el.enrollmentDate} </div>
          </div>
         
         })}
          
        </div>
      </div>
    </div>
          </div>
          <div className={Styles.frame30}>
            <div className={Styles.latestenrolments}>Best Students</div>
            <div className={Styles.viewallcourses}>View All Students </div>
          </div>

          <div className={Styles.tableconter}>
          <div className={Styles.table}>
      <div className={Styles.table2}>
        <div className={Styles.header}>
          <div className={Styles.enrno}>Reg. No </div>
          <div className={Styles.sname}>F. Name </div> 
          <div className={Styles.cname}>L. Name </div>
          <div className={Styles.fees}>Course </div>
          <div className={Styles.fees}>TOtal fees </div>
          <div className={Styles.enrdate}>Reg. Date </div>
        </div>
        <div className={Styles.body}>
        {students.map((el)=>{
          return <div className={Styles.row} key={el.id}>
            <div className={Styles._1563124}>{el.registrationNumber }</div>
            <div className={Styles.johndoe}>{el.firstName} </div>
            <div className={Styles.johndoe}>{el.lastName} </div>
            <div className={Styles.percussion}>{el.courseName } </div>
            <div className={Styles._120}>${el.fees}</div>
            <div className={Styles._1208223}>{el.registrationDate} </div>
          </div>
         
         })}
         
          
        </div>
      </div>
    </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
