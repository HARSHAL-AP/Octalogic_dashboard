import React from 'react'
import Styles from "./Row.module.css"
import Status from './Status'
import Actionbutton from './Actionbutton'


const Row = ({obj}) => {
  return (
    <div className={Styles.row}>
    <div className={Styles._1563124}>{obj.coursename}</div>
    <div className={Styles.johndoe}>{obj.courseDescription} </div>
    <div className={Styles.percussion}>{obj.instructor} </div>
    <div className={Styles._120}>{obj.instrument} </div>
    <div className={Styles._1208223}>{obj.dayofweak} </div>
    <div className={Styles._1563124}>{obj.nuofStudent} </div>
    <div className={Styles.johndoe}>${obj.price}</div>
    <div className={Styles.percussion}><Status ob={obj}/> </div>
    <div className={Styles._120}><button disabled={!obj.isactive}><Actionbutton ob={obj} /></button> </div>

  </div>
  )
}

export default Row