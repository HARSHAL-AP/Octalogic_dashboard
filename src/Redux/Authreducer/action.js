import * as types from "./actionType"
import axios from "axios"

export const login=(data) =>(dispatch)=> {
  dispatch({
    type:types.USER_LOGIN_REQUEST
  })
  axios.post("https://dull-jade-dragonfly-ring.cyclic.app/users/loginuser",data)
  .then((r)=>{
    alert("Login Scsessfull")
    dispatch({
        type:types.USER_LOGIN_SUCCESS
      })
     

  }).catch((e)=>{
    dispatch({
        type:types.USER_LOGIN_FAILURE
    })
  })
  
  
}

export const logout=() =>(dispatch)=> {
  dispatch({
    type:types.USER_LOGOUT
  })

}
