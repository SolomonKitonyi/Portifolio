import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import Interest from "./Interest";
import InformationCard from "./InformationCard";
import Classes from "./Interests.module.css";

const Interests = () => {
    return (
        <div>
            <Header/>
            <InformationCard title="Glad You are Here To know My Interests" info="I am interested in below things. They make my life joyous"/>
            <div className={Classes.interests}>
                <Interest name="Machine Learning" content="I am Interested in Machine Learning Concepts" background="green" />
                <Interest name="Typing" content="I enjoy typing with a speed of over 50 words per minute with 100 percent accuracy" background="gray" />
                <Interest name="Team Work" content="I am very happy while working as a team" background="purple" />
            </div>
            <Footer/>
        </div>
    );
}

export default Interests;