import {useState, useEffect} from 'react';
import CustomButton from '../../comps/CustomButton';
import Header from '../../comps/Header';
import './contact.css';

var index = 0;
const headers_arr = [
    "Thanks for contacting me!",
    "Goodbye",
    "Let me know if you have other questions",
    // {
    //     text:"datfa",
    //     img:"img.png"
    // }
]

const Contact = () => {

    // STEP 1 - crate the state variable and the function to update it, and put a default inside
    const [header_text, setHeader] = useState("Contact me!");
    // state variable (header_text)
    // function (setHeader) that updatees the state variable
    // default (Contact me!)

    const [pageleft, setLeft] = useState("-100%");
    // const [index, setIndex] = useState(0);
    // const [img_url, setImg] = useState("");

    useEffect(()=>{
        // we want the page to transition from left INITIALLY (1)
        setTimeout(()=>{
            // document.querySelector("#contactpage").style.left = 0;
            setLeft(0);
        }, 50);

        return ()=>{
            //what to do when the component dies (3)
        }
    }, []);

    useEffect(()=>{
        // what to do when a state in the page / component updates (2)
        // alert("Hi! Header text has changed")
        setLeft(20);
        setTimeout(()=>{
            setLeft(0);
        }, 500); //set back to 0 AFTER 500s.
    }, [header_text]);

    useEffect(()=>{
        // what to do when it's born / created / beginning of the life cycle
    }, []);

    // STEP 2 - connect the state variable to the UI
    return <div id="contactpage" style={{left:pageleft}}>
        <Header text={header_text} fontSize={24} />
        {/* <img src={img_url} /> */}
        <CustomButton text="Email" onClick={()=>{
            // STEP 3 - connect the function to when you want it to update (i.e. timer? interaction?)
            setHeader(headers_arr[index]);
            // setImg(headers_arr[index].img);
            index++;
            if(index > headers_arr.length-1){
                index = 0;
            }
            // setLeft("100%");
            }}/>
    </div>
};

export default Contact;