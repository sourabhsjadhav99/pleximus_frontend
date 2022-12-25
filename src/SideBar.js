import React from 'react'
import "./MainPage.css"
import { RiHome3Line } from "react-icons/ri";
import { IoIosNotifications } from "react-icons/io";
import { BsFillTagFill } from "react-icons/bs";
import { GrFormView, GrUpload, GrDownload } from "react-icons/gr";
function SideBar() {
  return (
    <div className='main-container'>
      <aside className="aside">
        <h1 className='logo'>Logo</h1>
        <div className=" side-icon ">
          <span className="icon blue-text">
            <RiHome3Line />
          </span>
          <span className="navvalue blue-text">Property</span>
        </div>

        <div className="side-icon">
          <span className="icon">
            <IoIosNotifications />
          </span>
          <span className="navvalue">Assistant</span>
        </div>

        <div className="side-icon">
          <span className="icon">
            <GrDownload />
          </span>
          <span className="navvalue">Received Interest</span>
        </div>

        <div className="side-icon ">
          <span className="icon">
            <GrUpload />
          </span>
          <span className="navvalue">Sent Interest</span>
        </div>

        <div className="side-icon">
          <span className="icon">
            <GrFormView />
          </span>
          <span className="navvalue">Property View</span>
        </div>

        <div className="side-icon">
          <span className="icon">
            <BsFillTagFill />
          </span>
          <span className="navvalue">Traffic Plan</span>
        </div>
      </aside>


    </div>
  )
}

export default SideBar
