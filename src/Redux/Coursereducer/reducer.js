import * as types from "./actionType";

const initState = {
  course: [],
  stuedntsdata: [],
  enrolments: [],
  isError: false,
  isLoading: false,
};

export const reducer = (state = initState, { type,payload }) => {
  switch (type) {
    case types.GET_COURSE_DATA_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case types.GET_STUDENT_DATA_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case types.GET_COURSE_DATA_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case types.GET_COURSE_DATA_FALUER:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };

    case types.GET_ENROLMENT_DATA_FALUER:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    case types.GET_COURSE_DATA_FALUER:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    case types.GET_COURSE_DATA_SUCSESS:
      return {
        ...state,
        isLoading: false,
        isError: false,
        course:payload,
      };
    case types.GET_ENROLMENT_DATA_SUCSESS:
      return {
        ...state,
        isLoading: false,
        isError: false,
        enrolments: payload,
      };
    case types.GET_STUDENT_DATA_SUCSESS:
      return {
        ...state,
        isLoading: false,
        isError: false,
        stuedntsdata: payload,
      };

    default:
      return state;
  }
};
