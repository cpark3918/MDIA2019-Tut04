import React from 'react';
import './chat.css';
import Header from '../Header';

const defaultImg = require('./default.png');
// find the image, then compile the image FIRST

const Chat = ({msg, img, name, backgroundColor}) => 
<div style={{backgroundColor: backgroundColor}} className="chat_card">
    <div className = "chat_user">
        <img src={defaultImg} />
        {/* then you can source it in <img> */}
        <Header text={name} fontSize = "100%" />
    </div>
    <div className="chat_msg">
        {msg}
    </div>
</div>;

Chat.defaultProps = {
    msg: "Please type something!",
    img: defaultImg,
    name: "Username",
    backgroundColor: "#EEE"
}

export default Chat;