import React from "react";
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
        </div>
    );
}

export default Header;