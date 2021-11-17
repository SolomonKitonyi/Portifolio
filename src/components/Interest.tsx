import React from 'react';
import Classes from "./Interest.module.css";
type InterestProps = {
    name: string,
    content: string,
    background: string
}

const Interest = (props: InterestProps) => {
    return (
            <div className={Classes.interest} style={{backgroundColor: props.background}}>
                <h4>{props.name}</h4>
                <p>{props.content}</p>
            </div>
    );
}
export default Interest;