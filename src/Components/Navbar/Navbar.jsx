import React, { useContext } from "react";
import "./Navbar.scss";
import {
  SearchOutlined,
  LanguageOutlined,
  DarkModeOutlined,
  FullscreenExitOutlined,
  NotificationsNoneOutlined,
  ChatBubbleOutlineOutlined,
  ListOutlined,
  LightModeOutlined,
} from "@mui/icons-material";
import { Avatar, Badge } from "@mui/material";
import raghav from "../../assets/images/raghav.lohia.lohia.jpg";
import { DarkModeContext } from "../../context/darkModeContext";
const Navbar = () => {
  const { dispatch } = useContext(DarkModeContext);
  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="search">
          <input type="text" name="" id="" placeholder="Search..." />
          <SearchOutlined />
        </div>
        <div className="items">
          <div className="item">
            <LanguageOutlined className="icon" />
            English
          </div>
          <div className="item">
            <DarkModeOutlined
              className="icon"
              onClick={() => dispatch({ type: "TOGGLE" })}
            />
          </div>
          <div className="item">
            <FullscreenExitOutlined className="icon" />
          </div>
          <div className="item">
            <Badge badgeContent={1} color="error">
              <NotificationsNoneOutlined className="icon" />
            </Badge>
          </div>
          <div className="item">
            <Badge badgeContent={2} color="error">
              <ChatBubbleOutlineOutlined className="icon" />
            </Badge>
          </div>
          <div className="item">
            <ListOutlined className="icon" />
          </div>
          <div className="item">
            <Avatar alt="Remy Sharp" src={raghav} className="avatar" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
