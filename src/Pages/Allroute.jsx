import React from "react";
import Home from "../Pages/Home/Home";
import Course from "../Pages/Course/Course";
import Login from "./Login/Login";
import Privateroute from "./Privateroute";
import { Routes, Route } from "react-router-dom";

const Allroute = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Privateroute>
            <Home />
          </Privateroute>
        }
      ></Route>
      <Route
        path="/course"
        element={
          <Privateroute>
            <Course />
          </Privateroute>
        }
      ></Route>
      <Route path="/login" element={<Login />}></Route>
    </Routes>
  );
};

export default Allroute;
