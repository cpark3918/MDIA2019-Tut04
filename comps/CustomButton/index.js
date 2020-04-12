import React, {useState, useEffect} from 'react';
import './cb.css';
// ./ = where the folder is located
// without this, code will look into node_modules folder

// Make the UI:
const CustomButton = ({text, color, onClick}) => <div 
style ={{backgroundColor: color, boxShadow: "1px 1px 5px" + color}}
onClick={onClick}
className="custom_button_box">
    <div className="custom_button_box_inner">
        {text}
    </div>
</div>;

function ButtonClick(){
    alert("Clicked");
}

CustomButton.defaultProps = {
    text:"Default Button",
    color: "#DAB",
    onClick: ButtonClick
}
// when text is not set; by default
export default CustomButton;