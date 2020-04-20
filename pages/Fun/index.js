import {useEffect} from 'react';
import Header from '../../comps/Header';
import CustomButton from '../../comps/CustomButton';

import './fun.css';

const Fun = () => {

    useEffect(()=>{
        setTimeout(()=>{
            document.querySelector("#funpage").style.left = 0;
        }, 50);
    }, []);

    return <div id="funpage">
        <Header text="Come together, stay apart" fontSize={50} />
        <CustomButton text="Let's" color="red" />
        <CustomButton text="Just" color="yellow" />
        <CustomButton text="Keep" color="green" />
        <CustomButton text="This" color="blue" />
        <CustomButton text="Simple" color="purple" />
    </div>
};

export default Fun;