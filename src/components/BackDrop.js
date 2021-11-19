import React, { useState } from "react";
import ReactDOM from "react-dom";
import Classes from "./BackDrop.module.css";

const BackDrop = (props) => {
    const [openBackDrop, setOpenBackDrop] = useState("none");
    let style = props.style;
    const backDropClick = (style) => {
        setOpenBackDrop(style)
    }
    
    return ReactDOM.createPortal (
        <div className={Classes.backdrop} style={{display:style}} onClick={()=>backDropClick("none")} ></div>,document.querySelector("#backdrop")
    )
}
export default BackDrop;