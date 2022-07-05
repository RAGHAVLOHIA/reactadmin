import {
  Dashboard,
  Person,
  ShoppingBag,
  ShoppingCart,
  DeliveryDining,
  Leaderboard,
  Notifications,
  SystemSecurityUpdateGood,
  Psychology,
  Settings,
  AccountCircle,
  Logout,
} from "@mui/icons-material";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { DarkModeContext } from "../../context/darkModeContext";
import "./Sidebar.scss";

const Sidebar = () => {
  const {dispatch} = useContext(DarkModeContext)
  return (
    <div className="sidebar">
      <div className="top">
        <Link to="/" style={{textDecoration:"none"}}>
        <span className="logo">ReactAdmin</span>
        </Link>
      </div>
      <hr />
      <div className="center">
        <ul>
            <p className="title">MAIN</p>
          <li>
            <Dashboard className="icon" />
            <span>dashboard</span>
          </li>
            <p className="title">LIST</p>
        <Link to="/users" style={{textDecoration:"none"}}>
          <li>
            <Person className="icon" />
            <span>Users</span>
          </li>
        </Link>
        <Link to="/products" style={{textDecoration:"none"}}>
          <li>
            <ShoppingBag className="icon" />
            <span>Products</span>
          </li>
          </Link>
          <li>
            <ShoppingCart className="icon" />
            <span>Orders</span>
          </li>
          <li>
            <DeliveryDining className="icon" />
            <span>Delivery</span>
          </li>
            <p className="title">USEFUL</p>
          <li>
            <Leaderboard className="icon" />
            <span>Statistics</span>
          </li>
          <li>
            <Notifications className="icon" />
            <span>Notifications</span>
          </li>
            <p className="title">SERVICE</p>
          <li>
            <SystemSecurityUpdateGood className="icon" />
            <span>System Health</span>
          </li>
          <li>
            <Psychology className="icon" />
            <span>Logs</span>
          </li>
          <li>
            <Settings className="icon" />
            <span>Settings</span>
          </li>
            <p className="title">USER</p>
          <li>
            <AccountCircle className="icon" />
            <span>Profile</span>
          </li>
          <li>
            <Logout className="icon" />
            <span>Logout</span>
          </li>
        </ul>
      </div>
      <div className="bottom">
        <div className="colorOption" onClick={()=>dispatch({type:"LIGHT"})}></div>
        <div className="colorOption" onClick={()=>dispatch({type:"DARK"})}></div>
      </div>
    </div>
  );
};

export default Sidebar;
