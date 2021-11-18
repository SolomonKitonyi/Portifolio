import React from "react";

import Classes from "./Stacks.module.css";
import Header from "./Header";
import Stack from "./Stack";
import InformationCard from "./InformationCard";
import Footer from "./Footer";

const Stacks = () => {
    return (
        <div>
            <Header />
            <InformationCard title="Hello There" info="I am good in the belows Stacks which I enjoy using. I have used some to create this Portfolio" />
            <div className={Classes.stacks}>
                <Stack name="React" background="violet" logo="images/logo512.png"/> 
                <Stack name="NodeJS" background="purple" logo="images/node.png"/>
                <Stack name="MongoDB" background="blue" logo="images/mongo.png"/>
                <Stack name="Express" background="grey" logo="images/express.png"/>
                <Stack name="CSS EXPERT" background="lightGreen" logo="images/CssPic.png"/>
            </div>
            <Footer />
        </div>
    );
}

export default Stacks;