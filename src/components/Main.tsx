import React from "react";
import Classes from "./Main.module.css";
import Stack from "./Stack";

const Main = () => {
    return (
        <div className={Classes.mainContent}>
            <div className={Classes.stack}>
                <h2>STACKS</h2>
                <Stack name="React" background="grey" logo="images/logo512.png"/>
                <Stack name="NodeJS" background="light-grey" logo="images/node.png"/>
                <Stack name="MongoDB" background="grey" logo="images/mongo.png"/>
                <Stack name="Express" background="grey" logo="images/express.png"/>
            </div>
        </div>
    );
}

export default Main;