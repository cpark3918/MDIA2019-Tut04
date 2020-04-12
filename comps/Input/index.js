import React, { useState } from 'react';
import './input.css';
import CustomButton from '../CustomButton';

const Input = ({ placeholder, onClick}) => {

    const [val, setVal] = useState("");

    return <div className="input_contain">
        <input onChange= {(e) => {
            setVal(e.target.value);
        }} type="text" placeholder={placeholder} />
        <CustomButton onClick={() => {
            // alert(val);
            onClick(val);
            // pass the value over to onClick function
        }}text="Send" color="#58F" />
    </div>
}

Input.defaultProps = {
    placeholder: "Type your chat here!",
    onClick: ()=>{}
}

export default Input;