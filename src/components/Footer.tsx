import React from "react";
import Classes from "./Footer.module.css";
const Footer = () => {
    return (
        <div className={Classes.mainFooter}>
            <div className={Classes.footerItemsDiv}>
                <ul className={Classes.footerItems}>
                    <li>Contact Me <br/> <span>kitonyisolomon@gmail.com</span></li>
                    <li>&copy;Copy Rights <br/> <span>2021</span></li>
                </ul>
            </div>
        </div>
    );
}

export default Footer;