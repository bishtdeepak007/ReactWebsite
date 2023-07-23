import React from 'react';
import './style.scss';
// import heroOne from '../../images/hero-imgOne.jpg';
// import heroTwo from '../../images/hero-imgTwo.jpg';
import heroOne from '../../Images/hero-imgOne.jpg';
import heroTwo from '../../Images/hero-imgTwo.jpg';
import { Button } from 'antd';
// import { NavLink } from "react-router-dom/cjs/react-router-dom";
import { NavLink } from 'react-router-dom';
import { Carousel } from 'antd';

const Herosection = ({ myData }) => {
    const { name } = myData;
    return (
        <>
            <section className="carousel-section">
                <Carousel autoplay>
                    <div className="herosection-banner">
                        <img src={heroOne} alt="banner" />
                        <div className="container">
                            <div className="herosection">
                                <div className="herosection-text">
                                    <span>special offer</span>
                                    <h1>{name}</h1>
                                    <h2>up to 50% off</h2>
                                    <p>only today</p>
                                    <NavLink to="/products">
                                        <Button type="primary">
                                            buy now
                                        </Button>
                                    </NavLink>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="herosection-banner">
                        <img src={heroTwo} alt="banner" />
                        <div className="container">
                            <div className="herosection-one">
                                <div className="herosection-text">
                                    <NavLink to="/products">
                                        <Button type="primary">
                                            buy now
                                        </Button>
                                    </NavLink>
                                </div>
                            </div>
                        </div>
                    </div>
                </Carousel>
            </section>
        </>
    );
}

export default Herosection