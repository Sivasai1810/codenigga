import React from 'react'
import "./sidebar.css"
import Addicon from "../assets/add.png"
import Exploreicon from "../assets/explore.png"
import History from "../assets/history.png"
import Profile from "../assets/user.png"
import Codelogo from "../assets/codeniggalogo.png"
const Sidebar = () => {
  return (
    <div>
      <div className='sidebar'>
<div className='sidebar-action-buttons'>
    <button className='sidebar-icon-btn tooltip'
        data-tooltip="Upload File"> 
        <img src={Addicon} alt='Add' width={26} height={26}></img>
        </button>
    <button className='sidebar-icon-btn tooltip'
        data-tooltip="More"> 
        <img src={Exploreicon} alt='Explore'  width={26} height={26}></img>
        </button>
    <button className='sidebar-icon-btn tooltip'
        data-tooltip="History">
        <img src={History} alt='History'  width={26} height={26}></img>
        </button>
            <button className='sidebar-icon-btn tooltip'
        data-tooltip="Profile">
        <img src={Profile} alt='Profile'  width={26} height={26}></img>
        </button>
   


</div>
<div className='sidebar-profile'>
<img  className="profile-img" src={Codelogo}alt='profile' width={26} height={26}></img>
</div>
      </div>
    </div>
  )
}

export default Sidebar
