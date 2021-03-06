import React from 'react';
import closeIcon from '../icon/closeIcon.png';
import onlineIcon from '../icon/onlineIcon.png';
import './InfoBar.css';
const InfoBar=({room})=>{
    return(
    <div className="infoBar">
        <div className="leftInnerContainer">
        <img className="onlineIcon" src={onlineIcon} alt="online image" />
        <h3>{room}</h3>
        </div>
        <div className="rightInnerContainer">
        </div>
    </div>
    );

};
export default InfoBar;