import {useEffect} from 'react';
import CustomButton from '../../comps/CustomButton';
import Header from '../../comps/Header';
import './about.css';

const About = () => { 

    useEffect(()=>{
        setTimeout(()=>{
            document.querySelector("#aboutpage").style.left = 0;
        }, 50);
    }, []);
    
    return <div id="aboutpage">
        <Header text="About Us" fontSize={30}/>
        This is tutorial 6
        <CustomButton text="Learn more" color="#EF9B89"/>
    </div>
};

export default About;