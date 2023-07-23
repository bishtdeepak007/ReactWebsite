import React, { useContext } from "react";
import Herosection from "../Herosection/Herosection";
import './style.scss';
import { TbTruckDelivery } from 'react-icons/tb';
import { BsFillShieldLockFill } from 'react-icons/bs';
import { FaRegMoneyBillAlt } from 'react-icons/fa';
import { RiSecurePaymentLine } from 'react-icons/ri';
// import { ContextData, formatPrice } from "../App";
import { ContextData, formatPrice } from "../../App";
// import { NavLink } from "react-router-dom/cjs/react-router-dom";
import { NavLink } from "react-router-dom";
import { Spin } from 'antd';

const Home = () => {
    const productData = useContext(ContextData);
    const { isLoading, featureProducts, high_price } = productData;

    const data = {
        name: "sale",
    }
    return (
        <>
            <div className="home">
                <Herosection myData={data} />
                <section className="feature-section">
                    <div className="loading">
                        {isLoading ? <Spin size="large" tip="Loading..." /> : null}
                    </div>
                    <div className="container">
                        <div className="feature-top">
                            <p>check now</p>
                            <h2>our feature services</h2>
                        </div>
                        <div className="feature-bottom">
                            {featureProducts.map((elem) => {
                                const { id, name, company, price, image } = elem;
                                return (
                                    <NavLink to={`/product/${id}`} key={id}>
                                        <div className="feature-products" >
                                            <div className="feature-img">
                                                <img src={image} alt="featured-img" />
                                            </div>
                                            <div className="feature-info">
                                                <p>{name}</p>
                                                <p> {formatPrice(price)}</p>
                                            </div>
                                        </div>
                                    </NavLink>
                                )
                            })}
                        </div>
                    </div>
                </section>

                <section className="service-section">
                    <div className="container">
                        <div className="service-main">
                            <div className="service-inner">
                                <TbTruckDelivery />
                                <p>super fast and free delivery</p>
                            </div>
                            <div className="service-inner">
                                <BsFillShieldLockFill />
                                <p>non-contact shipping</p>
                            </div>
                            <div className="service-inner">
                                <FaRegMoneyBillAlt />
                                <p>money-back guaranteed</p>
                            </div>
                            <div className="service-inner">
                                <RiSecurePaymentLine />
                                <p>super secure payment system</p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="feature-section">
                    <div className="loading">
                        {isLoading ? <Spin size="large" tip="Loading..." /> : null}
                    </div>
                    <div className="container">
                        <div className="feature-top">
                            <p>check now</p>
                            <h2>Top Rated Product</h2>
                        </div>
                        <div className="feature-bottom">
                            {high_price.map((elem) => {
                                const { id, name, company, price, image } = elem;
                                return (
                                    <NavLink to={`/product/${id}`} key={id}>
                                        <div className="feature-products" >
                                            <div className="feature-img">
                                                <img src={image} alt="featured-img" />
                                            </div>
                                            <div className="feature-info">
                                                <p>{name}</p>
                                                <p> {formatPrice(price)}</p>
                                            </div>
                                        </div>
                                    </NavLink>
                                )
                            })}
                        </div>
                    </div>
                </section>

                <section className="trusted-section">
                    <div className="container">
                        <div className="trusted">
                            <h2> trusted by 1000+ companies</h2>
                            <div className="trusted-inner">
                                <div className="trusted-inner-img">
                                    <img src="https://www.freepnglogos.com/uploads/company-logo-png/file-mobile-apps-development-company-logo-25.png" alt="company-logo1" />
                                </div>
                                <div className="trusted-inner-img">
                                    <img src="https://www.freepnglogos.com/uploads/company-logo-png/brand-tibco-logo-palo-alto-company-png-34.png" alt="company-logo2" />
                                </div>
                                <div className="trusted-inner-img">
                                    <img src="https://www.freepnglogos.com/uploads/company-logo-png/logo-bolt-company-17.png" alt="company-logo3" />
                                </div>
                                <div className="trusted-inner-img">
                                    <img src="https://www.freepnglogos.com/uploads/company-logo-png/company-logo-simmons-bedding-company-wikipedia-15.png" alt="company-logo4" />
                                </div>
                                <div className="trusted-inner-img">
                                    <img src="https://www.freepnglogos.com/uploads/company-logo-png/hbc-company-logo-hudson-bay-company-11.png" alt="company-logo5" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

            </div>
        </>
    );
}

export default Home