import React from "react";
import { Link } from "react-router-dom";
import Classes from './Header.module.css'

const Header = () => {
    return (
        <div className= {Classes.mainHeader}>
            <div className= {Classes.toogleButton}>
                <span className={Classes.Hurbergur}></span>
                <span className={Classes.Hurbergur}></span>
                <span className={Classes.Hurbergur}></span>
            </div>
            <div className= {Classes.portifolioLogo}>S.K</div>
            <div className={Classes.desktopNav}>
                <ul className={Classes.mainNavList}>
                    <Link to="/profile">
                        <li>PROFILE</li>
                    </Link>
                    <Link to="/profile">
                        <li>STACK</li>
                    </Link>
                    <Link to="/profile">
                        <li>INTERESTS</li>
                    </Link>
                </ul>
            </div>
        </div>
    );
}

export default Header;