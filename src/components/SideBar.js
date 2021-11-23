import React from "react";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";
import Classes from "./SideBar.module.css";

const SideBar = (props) => {
    
    return ReactDOM.createPortal (
        <div className={Classes.sideBar} style={{display: props.openNav}}>
            <div className={Classes.closeSideBar}>
              <div className={Classes.close} onClick={() => {props.setOPenNav('none'); props.setOPenBackDrop('none')}}>X</div>
            </div>
            <div className={Classes.mobileNav}>
                <div>
                    <ul className={Classes.mobileNavList}>
                        <Link to="/profile">
                            <li>PROFILE</li>
                        </Link>
                        <Link to="/stacks">
                            <li>STACKS</li>
                        </Link>
                        <Link to="/interests">
                            <li>INTERESTS</li>
                        </Link>
                    </ul>
                </div>
            </div>
        </div>,document.querySelector("#sidebar")
    )
}
export default SideBar;