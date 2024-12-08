import React, { useState } from "react";
import "./Chat.scss";
import ChatHeader from "./ChatHeader";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import CardGiftcardIcon from "@mui/icons-material/CardGiftcard";
import GifIcon from "@mui/icons-material/Gif";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
import Message from "./Message";
import { useAppSelector } from "../../app/hooks";
import { addDoc, collection, CollectionReference, DocumentData, serverTimestamp } from "firebase/firestore";
import { db } from "../../firebase";
import useSubCollection from "../../hooks/useSubCollection";

const Chat = () => {
  const [inputText, setInputText] = useState<string>("");
  const channelName = useAppSelector((state) => state.channel.channelName);
  const channelId = useAppSelector((state) => state.channel.channelId);
  const user = useAppSelector((state) => state.user.user);
  const { subDocuments: messages } = useSubCollection("channels", "messages");

  const sendMessage = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();

    const collectionRef: CollectionReference<DocumentData> = collection(db, "channels", String(channelId), "messages");

    if (inputText !== "") {
      await addDoc(collectionRef, {
        message: inputText,
        timestamp: serverTimestamp(),
        user: user,
      });
      setInputText("");
    } else {
      alert("入力してください。");
    }
  };
  return (
    <div className="chat">
      <ChatHeader channelName={channelName} />
      <div className="chat__massage">
        {messages.map((message, index) => (
          <Message key={index} message={message.message} timestamp={message.timestamp} user={message.user} />
        ))}
      </div>
      <div className="chat__input">
        <AddCircleOutlineIcon />
        <form>
          <input type="text" placeholder="チャンネル名へメッセージを送信" onChange={(e: React.ChangeEvent<HTMLInputElement>) => setInputText(e.target.value)} value={inputText} />
          <button type="submit" className="chat__input-button" onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => sendMessage(e)}></button>
        </form>
        <div className="chat__input-icons">
          <CardGiftcardIcon />
          <GifIcon />
          <EmojiEmotionsIcon />
        </div>
      </div>
    </div>
  );
};

export default Chat;
