
import React, { useContext, useEffect, useState } from "react";
import { ShoppingCartOutlined } from '@ant-design/icons';
// import { NavLink } from "react-router-dom/cjs/react-router-dom";
import { NavLink } from "react-router-dom";
// import logonew from "../../images/logoNew.jpg";
import logoNew from '../../Images/logoNew.jpg';
// import "./style.scss";
import { Button } from "antd";
import { HiMenuAlt1 } from 'react-icons/hi';
import { RxCross2 } from "react-icons/rx";
// import { CartContext } from "../../containers/App";
import { CartContext } from "../../App";
import "./style.scss";

import { Drawer } from 'antd';
import Cart from "../../Container/Cart/Cart";
const Header = () => {
    const [toggle, setTogle] = useState(false);
    const [icon, setIcon] = useState(false);
    const [isVissible, setIsVissible] = useState(false);
    const [login, setLogin] = useState("");
    // const [vissible, setVissible] = useState([])
    const [open, setOpen] = useState(false);

    // const cartData = useContext(CartContext)
    // const { cart_item } = cartData;

    const loginLogout = () => {

        const getuser = localStorage.getItem("loginData")
        if (getuser && getuser.length) {
            const user = JSON.parse(getuser);
            console.log(user)
            setLogin(user)
            // setVissible(user)
        }
    }

    const logoutHandle = () => {
        localStorage.removeItem("loginData");
        console.log("logout successfully")
        window.location.href = "/";
        // redirect("/")

    }
    const loginBtn = () => {
         window.location.href = "/login";
    }
    useEffect(() => {
        loginLogout()
    }, [])

    const toggleBtn = () => {
        setTogle(!toggle);
        setIcon(!icon)
    }



    const navScroll = () => {
        if (window.pageYOffset >= 250) {
            setIsVissible(true)
        } if (window.pageYOffset > 1) {
            setTogle(false);
            setIcon(false)
        }
        else {
            setIsVissible(false)
        }

    }
    useEffect(() => {
        window.addEventListener("scroll", navScroll);
    })



    const showDrawer = () => {
        setOpen(true);
    };

    const onClose = () => {
        setOpen(false);
    };
    return (<>

        <div className={isVissible ? "header-section active" : "header-section"}>
            <div className="container">
                <div className="head-main">
                    <div className="logo">
                        <NavLink to="/home" >
                            <img src={logoNew} alt="logo" />
                            {toggle}
                        </NavLink>
                    </div>
                    <div className="nav-link">
                        <ul>
                            <li>
                                <NavLink to="/home">
                                    home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/about">
                                    about
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/contact">
                                    contact
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/products">
                                    product
                                </NavLink>
                            </li>
                            <li className="login">
                                {(login.length) ? <Button onClick={logoutHandle}>Logout</Button> : <Button onClick={loginBtn}>Login</Button>}
                            </li>
                            <div className="welcome-user">
                                {(login.length) ? (
                                    login.map((elem) => {
                                        return (
                                            <span> welcome <br /> {elem.name}</span>
                                        )
                                    })
                                ) : <></>}
                            </div>
                            <li onClick={showDrawer} className="cart">
                                {/* <p>{cart_item}</p> */}
                                <ShoppingCartOutlined />
                            </li>
                            <Drawer title="Cart" placement="right" onClose={onClose} open={open}>
                                <div className="drawer-section">
                                    {/* <Cart /> */}
                                </div>
                            </Drawer>
                        </ul>
                    </div>
                    {/* responsive menu */}
                    <div className="res-menu">
                        <li className="login">
                            {(login.length) ? <Button onClick={logoutHandle}>Logout</Button> : <Button onClick={loginBtn}>Login</Button>}
                        </li>
                        <div className="welcome-user">
                            {(login.length) ? (
                                login.map((elem) => {
                                    return (
                                        <>
                                            <span> welcome <br /> {elem.name}</span>
                                        </>
                                    )
                                })
                            ) : <></>}
                        </div>
                        <div className="res-menu-cart">
                            <div onClick={showDrawer}>
                                {/* <p>{cart_item}</p> */}
                                <ShoppingCartOutlined />
                            </div>
                            <Drawer title="Shopping Cart" placement="right" onClose={onClose} open={open}>
                                <div className="drawer-section">
                                    {/* <Cart /> */}
                                </div>
                            </Drawer>
                        </div>
                        <div className="menu-icon" onClick={toggleBtn}>
                            {icon ? <RxCross2 /> : <HiMenuAlt1 />}
                        </div>
                    </div>
                    {/* responsive menu */}
                </div>
            </div>
        </div>
        {/* responsive-menu */}
        <div div className={toggle ? "nav-link-responsive active" : "nav-link-responsive"} >
            <ul>
                <li>
                    <NavLink to="/home" >
                        home
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/about" >
                        about
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/contact">
                        contact
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/products">
                        product
                    </NavLink>
                </li>
            </ul>
        </div>
    </>)
}

export default Header
