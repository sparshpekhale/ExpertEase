import React,{useState} from 'react';
import MainHeader from './MainHeader';
import {Link} from 'react-router-dom';
import name from './finallogo.png';
import './MainNavigation.css';
import NavLinks from './NavLinks';
import SideDrawer from './SideDrawer';
import Backdrop from '../UIElement/Backdrop';

function MainNavigation()
{
    const [drawerIsOpen,SetDrawerIsOpen]=useState(false);
    const openDrawer =() =>{
        SetDrawerIsOpen(true);
    }
    const closeDrawer =() =>{
        SetDrawerIsOpen(false);
    }

    return(
        <React.Fragment>
            {drawerIsOpen && <Backdrop onClick={closeDrawer}/>}
        {drawerIsOpen &&
        <SideDrawer show={drawerIsOpen}>
            <nav className="main-navigation__drawer-nav">
                <NavLinks/>
            </nav>
        </SideDrawer>
        }
        <MainHeader >
            <button className="main-navigation__menu-btn" onClick={openDrawer}>
                <span/>
                <span/>
                <span/>
            </button>
            <h1 className="main-navigatin__title">
                <Link to="/" ><img id="title" src={name} alt="" /></Link>
            </h1>
            <nav className="main-navigation__header-nav">
                <NavLinks />
            </nav>

        </MainHeader>
        </React.Fragment>
    );

}
export default MainNavigation;