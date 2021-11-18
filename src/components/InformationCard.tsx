import React from "react";
import Classes from "./InformationCard.module.css";

type informationCardProps = {
    title: string,
    info: string,
}


const InformationCard = (props:informationCardProps) => {
    return (
        <div>
            <div className={Classes.infoCard}>
                <h1>{props.title}</h1>
                <p>{props.info}</p>
            </div>
        </div>
    );
}

export default InformationCard;