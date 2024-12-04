import React from "react";
import "./Sidebar.scss";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AddIcon from "@mui/icons-material/Add";
import SidebarChannel from "./SidebarChannel";
import MicIcon from "@mui/icons-material/Mic";
import HeadphonesIcon from "@mui/icons-material/Headphones";
import SettingsIcon from "@mui/icons-material/Settings";
import { auth } from "../../firebase";
import { useAppSelector } from "../../app/hooks";

const Sidebar = () => {
  const user = useAppSelector((state) => state.user);

  return (
    <>
      <div className="sidebar">
        <div className="sidebar__left">
          <div className="sidebar__icon">
            <img src="./discordIcon.png" alt="" />
          </div>
          <div className="sidebar__icon">
            <img src="./icon.png" alt="" />
          </div>
        </div>
        <div className="sidebar__right">
          <div className="sidebar__top">
            <h3>Discord</h3>
            <ExpandMoreIcon />
          </div>
          <div className="sidebar__channels">
            <div className="sidebar__channels-header">
              <div className="sidebar__header">
                <ExpandMoreIcon />
                <h4>チャンネル</h4>
              </div>
              <AddIcon className="sidebar__add" />
            </div>
          </div>
          <div className="sidebar__channel-list">
            <SidebarChannel />
          </div>
          <div className="sidebar__footer">
            <div className="sidebar__account">
              <img src={user?.photo} alt="" onClick={() => auth.signOut()} />
              <div className="sidebar__account-name">
                <h4>{user?.displayName}</h4>
                <span>#{user?.uid.substring(0, 4)}</span>
              </div>
            </div>
            <div className="sidebar__voice">
              <MicIcon />
              <HeadphonesIcon />
              <SettingsIcon />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
