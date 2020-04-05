import React from 'react';
import CustomButton from '../comps/CustomButton';
import Header from '../comps/Header';
import Form from '../comps/Forms';

export default {
    title: "Custom Button",
    component: CustomButton
}

export const MyCustomButton = () => <CustomButton />;

export const PageWithCustomButtons = () => <div>
    <Header 
    fontSize = {15}
    color = "#000"/>
    <Header 
    fontSize = {10}
    onMouseOver = {CancelClick}/>
    <Header 
    fontSize = {20}
    color = "yellow"
    onMouseOver = {OKClick}/>
    <CustomButton 
    color = "#999"
    text = 'Cancel'
    onClick = {CancelClick} />
    <CustomButton 
    color = "#3F5"
    text = 'OK'
    onClick = {OKClick} />
    <CustomButton 
    color = "#F3F"
    text = 'Submit' />
    <CustomButton 
    text = 'Menu' />
    <Form 
    text = "First Name"
    color = "#3F5"/>
    <Form 
    text = "Last Name"
    color = "#F3F"/>
    <Form />
</div>

function CancelClick(){
    alert("Cancel");
}

function OKClick(){
    alert("OK");
}