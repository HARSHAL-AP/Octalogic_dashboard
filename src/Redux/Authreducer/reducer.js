import * as types from "./actionType";

const initState = {
  isError: false,
  isAuth: JSON.parse(localStorage.getItem("isAuth")) || false,
};

export const reducer = (state = initState, { type, payload }) => {
  switch (type) {
    case types.USER_LOGIN_REQUEST:
      return {
        ...state,
        isError: false,
        isAuth: false,
      };
    case types.USER_LOGIN_SUCCESS:
      localStorage.setItem("isAuth", JSON.stringify(true));
      return {
        ...state,
        isError: false,
        isAuth: true,
      };
    case types.USER_LOGIN_FAILURE:
      return {
        ...state,
        isError: true,
        isAuth: false,
      };
    case types.USER_LOGOUT:
      localStorage.setItem("isAuth", JSON.stringify(false));
      return {
        ...state,
        isError: true,
        isAuth: false,
      };
    default:
      return state;
  }
};
