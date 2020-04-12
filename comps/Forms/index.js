import React from 'react';
import './forms.css';

const Form = ({text, color}) => <div
style = {{color: color, border: "1px solid" + color}}
className = "forms_box">
    <div className = "forms_box_inner">
        {text}
        <input type="text" />
    </div>
</div>;

Form.defaultProps = {
    text: "Name",
    color: "#000"
}

export default Form;
