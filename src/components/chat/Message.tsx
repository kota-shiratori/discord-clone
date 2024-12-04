import React from "react";
import { Avatar } from "@mui/material";
import "./Message.scss";

function Message() {
  return (
    <div className="message">
      <Avatar />
      <div className="message__info">
        <h4>
          Swan
          <span className="message__time">2024/12/2</span>
        </h4>

        <p>メッセージ本文</p>
      </div>
    </div>
  );
}

export default Message;
