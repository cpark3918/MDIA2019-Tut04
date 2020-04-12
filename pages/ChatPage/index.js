import React, { useState } from 'react';
import './chatpage.css'
import Chat from '../../comps/Chat';
import CustomButton from '../../comps/CustomButton';
import Input from '../../comps/Input';
import Header from '../../comps/Header';

// var welcome = "Welcome to my App!";

// function setWelcome() {
//     welcome = "Start with sending a message.";
//     document.querySelector("#welcome").innerText = welcome;
// }



const ChatPage = ({ }) => {
    // you most likely will not hav econfig ({}) when building pages
    const [welcome, setWelcome] = useState("Welcome to my App!");
    const [msg, setMsg] = useState("Please type something");
    const [resp, setResp] = useState("Let me respond to you");
    const [color, setColor] = useState("#DAD")
    const [text, setText] = useState("Love me!")

    return <div>
        <div id="welcome">
            <Header fontSize={32} text={welcome} />
        </div>
        <div id="chats" onClick={() => {
            setWelcome("Start with sending a message.");
            // setWelcome is now a function
        }}>
            <Chat name={"User 1"} msg={msg} />
            <p />
            <Chat img={"https://cdn4.iconfinder.com/data/icons/space-and-astronomy-1/800/robot-512.png"} name={"Chat Bot"} backgroundColor={"#FAB"} msg={resp} />
        </div>
        <div id="controls">
            <Input onClick={(val) => {
                setMsg(val);
                var new_resp = CheckResponse(val)
                setResp(new_resp)
                // if (val == "hi") {
                //     setResp("I love pie");
                // }
            }} />
        </div>
        <div id="custom_button">
            <CustomButton color={color} text={text} onClick={() => {
                setColor("#999")
                setText("You loved me already")
            }}/>
            {/* when clicked, setColor to another color & change text */}
        </div>
    </div>
}

function CheckResponse(input) {
    switch (input.toLowerCase()) {
        // the .toLowerCase accepts hi, HI and Hi
        case "hi":
            return "I love pie";
        case "how are you?":
            return "Great! Thanks";
        default:
            return "I don't understand what you are trying to say!"
    }
}

ChatPage.defaultProps = {

}

export default ChatPage;