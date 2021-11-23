import React, { useState } from "react";
import { Link } from "react-router-dom";
import Classes from './Header.module.css'
import BackDrop from "./BackDrop";
import SideBar from "./SideBar";

const Header = () => {
    const [openBackDrop, setOPenBackDrop] = useState("none");
    const [openNav, setOPenNav] = useState("none");
    const toogleButtonClick = () => {
        setOPenBackDrop("block")
        setOPenNav("block")
    }
     return (
        <div className= {Classes.mainHeader}>
            <BackDrop openBackDrop={openBackDrop} setOPenBackDrop={setOPenBackDrop} setOPenNav={setOPenNav} />
            <SideBar setOPenNav={setOPenNav} openNav={openNav}openBackDrop={openBackDrop} setOPenBackDrop={setOPenBackDrop}/>
            <div className= {Classes.toogleButton} onClick={toogleButtonClick}>
                <span className={Classes.Hurbergur}></span>
                <span className={Classes.Hurbergur}></span>
                <span className={Classes.Hurbergur}></span>
            </div>
            <Link to="/">
            <div className= {Classes.portifolioLogo}>S.K</div>
            </Link>
            <div className={Classes.desktopNav}>
                <ul className={Classes.mainNavList}>
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
    );
}

export default Header;