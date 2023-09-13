import React from 'react'
import Styles from "./Row.module.css"

const Status = ({ob}) => {
  return (
    <div className={Styles}>
      {ob.isarchive&&<button className={Styles.archive}>Archived</button>}
       {!ob.isarchive&&ob.isactive&&<button className={Styles.active}>Active</button>}
       {!ob.isarchive&&!ob.isactive&&<button className={Styles.closeb}>Close</button>}

    </div>
  )
}

export default Status