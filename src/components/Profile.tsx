import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import Classes from "./Profile.module.css";

const Profile = () => {
    return (
        <div>
            <Header />
            <div>
                <div className={Classes.image}>
                    <img alt="Solomon Kitonyi" src="images/profile.jpeg"/>
                </div>
                <div className={Classes.toss}>Hello There. I am a Mern Stack Software Engineer</div>
                <div className={Classes.info}>
                    <h4>Solomon Ndolo Kitonyi</h4>
                    <div>
                      <h5>Contants</h5>
                      <p>kitonyisolomon@gmail.com</p>
                    </div>
                    <div>
                        <h5>Location</h5>
                        <p>Nairobi Kenya</p>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Profile;