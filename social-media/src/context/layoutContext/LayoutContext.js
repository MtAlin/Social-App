import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Leftbar from "../../components/leftbar/LeftBar";
import Rightbar from "../../components/rightbar/RigthBar";
import { Outlet } from "react-router-dom";
import { useState, createContext } from "react";
import { useEffect } from "react";
import axios from "axios";
import "../layoutContext/LayoutContext.scss";
export const UserContext = createContext();
function LayoutContext() {
  const [user, setUser] = useState("");

  const token = localStorage.getItem("token");
  useEffect(() => {
    const getUser = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8000/api/auth/login/users",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setUser(response.data);
      } catch (error) {
        console.log(error.message);
      }
    };
    getUser();
  }, []);

  return (
    <UserContext.Provider value={user}>
      <div className="theme-dark">
        <Navbar />
        <div className="layout">
          <Leftbar />
          <div style={{ flex: 6 }}>
            <Outlet />
          </div>
          <Rightbar />
        </div>
      </div>
    </UserContext.Provider>
  );
}

export default LayoutContext;
