// use the same component to change the fontSize
// change the text color of the header
// change the onMouseOver

import React from 'react';
import './header.css';

const Header = ({text, fontSize, color, onMouseOver}) => <div
onMouseOver = {onMouseOver}
className = "header_box">
    <h1 style = {{fontSize: fontSize}}>{text}</h1>
</div>

function MouseOver(){
    console.log("Mouse is over");
}

Header.defaultProps = {
    text: "Header",
    fontSize: 12,
    color: "#FFF",
    onMouseOver:MouseOver
}

export default Header;