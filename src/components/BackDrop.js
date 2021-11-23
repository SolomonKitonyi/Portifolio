import React from "react";
import ReactDOM from "react-dom";
import Classes from "./BackDrop.module.css";

const BackDrop = (props) => {
    let style = props.openBackDrop;
    
    return ReactDOM.createPortal (
        <div className={Classes.backdrop} style={{display:style}} onClick={() => {props.setOPenBackDrop("none"); props.setOPenNav("none") }}></div>,document.querySelector("#backdrop")
    )
}
export default BackDrop;