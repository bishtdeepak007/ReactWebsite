import React from "react";
import about from '../../Images/aboutusOne.jpg'
import "./style.scss";
import { Button } from "antd";

const About = () => {
    // const data = {
    //     name: "luto sale",
    // }
    return (
        <>
            <section className="about-section">
                {/* <Herosection myData={data} /> */}
                <div className="container">
                    <div className="about-main">
                        <div className="about-left">
                            <h1>About Us</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                                labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                                cillum dolore eu fugiat nulla pariatur.
                                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                            <Button>Read More</Button>
                        </div>
                        <div className="about-right">
                            <img src={about} alt="about-us" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default About