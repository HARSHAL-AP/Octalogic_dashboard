import Addcourse from "../../Components/Course/Addcourse";
import * as types from "./actionType";
import axios from "axios";

export const getenrolments = () => (dispatch) => {
  dispatch({
    type: types.GET_ENROLMENT_DATA_REQUEST,
  });
  axios
    .get("https://capil.onrender.com/enrolment")
    .then((r) => {
      dispatch({
        type: types.GET_ENROLMENT_DATA_SUCSESS,
        payload: r.data,
      });
      console.log(r.data)
    })
    .catch((e) => {
      console.log(e);
      dispatch({
        type: types.GET_ENROLMENT_DATA_FALUER,
      });
    });
};

export const getstuedntsdata = () => (dispatch) => {
  dispatch({
    type: types.GET_STUDENT_DATA_REQUEST,
  });
  axios
    .get("https://capil.onrender.com/StudentData")
    .then((r) => {
      dispatch({
        type: types.GET_STUDENT_DATA_SUCSESS,
        payload: r.data,
      });
    })
    .catch((e) => {
      console.log(e);
      dispatch({
        type: types.GET_STUDENT_DATA_FALUER,
      });
    });
};

export const coursedata = () => (dispatch) => {
  dispatch({
    type: types.GET_COURSE_DATA_REQUEST,
  });
  axios
    .get("https://capil.onrender.com/course")
    .then((r) => {
      dispatch({
        type: types.GET_COURSE_DATA_SUCSESS,
        payload: r.data,
      });
    })
    .catch((e) => {
      console.log(e);
      dispatch({
        type: types.GET_COURSE_DATA_FALUER,
      });
    });
};



