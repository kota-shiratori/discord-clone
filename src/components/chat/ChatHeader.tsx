import React from "react";
import "./ChatHeader.scss";
import NotificationsIcon from "@mui/icons-material/Notifications";
import PushPinIcon from "@mui/icons-material/PushPin";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import SearchIcon from "@mui/icons-material/Search";
import SendIcon from "@mui/icons-material/Send";
import HelpIcon from "@mui/icons-material/Help";

function ChatHeader() {
  return (
    <div className="chat__header">
      <div className="chat__header-left">
        <h3>
          <span className="chat__header-hash">#</span>
          Udemy
        </h3>
      </div>
      <div className="chat__header-right">
        <NotificationsIcon />
        <PushPinIcon />
        <PeopleAltIcon />
        <div className="chat__header-search">
          <input type="text" placeholder="検索" />
          <SearchIcon />
        </div>
        <SendIcon />
        <HelpIcon />
      </div>
    </div>
  );
}

export default ChatHeader;
