import Link from 'next/link';
import Router from 'next/router'
import './app.css';
import {FaSearchDollar} from 'react-icons';

function ClickIndex() {
    // if (confirm("Are you sure?")){
    //     // then move to Chat Page
    //     Router.push("/ChatPage");
    // }
    // document.querySelector("#main_app").style.opacity = 0;
    document.querySelector("#mainapp").style.left = "-100%";
    setTimeout(function () {
        Router.push("/ChatPage")
    }, 1000)
}

const Index = () => <div id="mainapp">
    <div onClick={ClickIndex}>Index</div>
    <Link href="/ChatPage"><button>Chats!</button></Link>
    <Link href="/Contact"><button>Contact Me</button></Link>
    <Link href="/About"><button>What is this?</button></Link>
    <Link href="/Fun"><button>DO IT</button></Link>
</div>

export default Index;