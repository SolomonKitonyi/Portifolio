import React from "react";
import Interest from "./Interest";
import Classes from "./Main.module.css";
import Stack from "./Stack";

const Main = () => {
    return (
        <div className={Classes.mainContent}>
            <div className={Classes.profileContainer}>
                <img alt="Profile" src= "images/profile.jpeg" className={Classes.profileImg}/>
            </div>
            <h2 style={{textAlign: "center"}}>STACKS</h2>
            <div className={Classes.stack}>
                {<Stack name="React" background="violet" logo="images/logo512.png"/> }
                <Stack name="NodeJS" background="purple" logo="images/node.png"/>
                <Stack name="MongoDB" background="blue" logo="images/mongo.png"/>
                <Stack name="Express" background="grey" logo="images/express.png"/>
                <Stack name="CSS EXPERT" background="lightGreen" logo="images/CssPic.png"/>
            </div>
            <h2 style={{textAlign:"center"}}>INTERESTS</h2>
            <div className={Classes.interest}>
                <Interest name="Machine Learning" content="I am Interested in Machine Learning Concepts" background="green" />
                <Interest name="Typing" content="I enjoy typing with a speed of over 50 words per minute with 100 percent accuracy" background="gray" />
                <Interest name="Team Work" content="I am very happy while working as a team" background="purple" />
            </div>
        </div>
    );
}

export default Main;