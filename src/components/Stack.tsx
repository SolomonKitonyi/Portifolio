import React from "react";
import Classes from './Stack.module.css';

type StackProps = {
    name: string,
    background: string,
    logo: string
}

const Stack = (props: StackProps) => {
    return (
        <div className= {Classes.stackContent} style={{backgroundColor:props.background}}>
            <h4>{props.name}</h4>
            <img alt={props.name} src={props.logo} className={Classes.image}/>
        </div>
    );
}

export default Stack;