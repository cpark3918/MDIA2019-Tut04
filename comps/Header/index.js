// use the same component to change the fontSize
// change the text color of the header
// change the onMouseOver

import React from 'react';
import './header.css';

const Header = ({fontSize, color, onMouseOver}) => <div
style = {{fontSize, color}}
onMouseOver = {onMouseOver}
className = "header_box">
    <h1>Header</h1>
</div>

function MouseOver(){
    console.log("Mouse is over");
}

Header.defaultProps = {
    fontSize: 12,
    color: "#FFF",
    onMouseOver:MouseOver
}

export default Header;