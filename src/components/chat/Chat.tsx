import React from "react";
import "./Chat.scss";
import ChatHeader from "./ChatHeader";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import CardGiftcardIcon from "@mui/icons-material/CardGiftcard";
import GifIcon from "@mui/icons-material/Gif";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
import Message from "./Message";

function Chat() {
  return (
    <div className="chat">
      <ChatHeader />
      <div className="chat__massage">
        <Message />
      </div>
      <div className="chat__input">
        <AddCircleOutlineIcon />
        <form>
          <input type="text" placeholder="チャンネル名へメッセージを送信" />
          <button type="submit" className="chat__input-button"></button>
        </form>
        <div className="chat__input-icons">
          <CardGiftcardIcon />
          <GifIcon />
          <EmojiEmotionsIcon />
        </div>
      </div>
    </div>
  );
}

export default Chat;
