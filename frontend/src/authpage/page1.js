import React from 'react';
import './page1.css';
import logo from './finallogo.png';
import { FaHome } from 'react-icons/fa';
import { HiOutlineInformationCircle } from 'react-icons/hi';
import { BsEnvelopeFill } from 'react-icons/bs';
import { BsFillQuestionSquareFill } from 'react-icons/bs';
import { FaPhoneAlt } from 'react-icons/fa';
import { MdEmail} from 'react-icons/md';
import Login from './Login/login.jsx';

function Page1() {
    return (
        <div>
            <nav id='navbar'>
                <div id='logo'>
                    <img className="logo"src={logo} alt=""/>
                    {/* <h1 className="logo">eE.</h1> */}
                    
                    
                </div>
                <ul>
                    <li className='item'><a href='#home'><FaHome />  HOME</a></li>
                    <li className='item'><a href='#about'><HiOutlineInformationCircle /> ABOUT US</a></li>
                    <li className='item'><a href='#contact'><BsEnvelopeFill />  CONTACT US</a></li>
                    <li className='item'><a href='#' target="_blank"><BsFillQuestionSquareFill />  FAQ's</a></li>
                </ul>
            </nav>
            {/* <img className="name"src={name} alt=""/> */}
            <section id="home">
            
            {/* <img className="hat" src={hat} alt=""/> */}
            
                <div id='log'>

                    <Login />
                </div>
            </section>
            <section id="about">
                <div>
                    <h1>About US</h1>
                    <p>ExpertEase is a semester project perceived and built by a team of four students of Bennett University, a platform where careers are planned, mapped and made possible with expert guidance of professionals.
                </p>
                </div>
            </section>
            <section id="contact">
                <h1>Contact Information</h1>
                <div>
                    <ul>
                        <li id="phone"><FaPhoneAlt/>  144-5678-3456</li>
                        <li id="email"><a href=" https://www.gmail.com/" target="_blank"><MdEmail/>  expertease@gmail.com</a></li>
                    </ul>
                </div>
            </section>
        </div>

    );
}
export default Page1;