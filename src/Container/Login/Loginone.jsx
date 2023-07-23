import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Form from 'antd/es/form';
import Input from 'antd/es/input';
import { Button, Modal } from 'antd';
import "./style.scss";
import logonew from "../../Images/logoNew.jpg";
import login from "../../Images/login-bg.jpg";



const Loginone = () => {
    const [val, setVal] = useState({
        name: "",
        password: "",
    });
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isModalOpenOne, setIsModalOpenOne] = useState(false);
    const [isModalOpenTwo, setIsModalOpenTwo] = useState(false);
    const [isModalOpenThree, setIsModalOpenThree] = useState(false);

    const inputval = (e) => {
        const { name, value } = e.target
        setVal((preval) => {
            return {
                ...preval,
                [name]: value,
            }
        })

    }
    const loginHandle = (e) => {

        const getUser = localStorage.getItem("userinfo");
        const { name, password } = val;
        if (name === "") {
            console.log("name is empty");
            setIsModalOpen(true)
        } else if (password === "") {
            console.log("password is empty");
            setIsModalOpenOne(true)
        } else {
            if (getUser.length) {
                const userData = JSON.parse(getUser);
                const userLogin = userData.filter((elem, index) => {
                    return elem.name === name && elem.password === password;
                })
                if (userLogin.length === 0) {
                    console.log("invalid details")
                    setIsModalOpenTwo(true)
                } else {
                    console.log("login successfully")
                    setIsModalOpenThree(true)
                    localStorage.setItem("loginData", JSON.stringify(userLogin))
                    window.location.href = "/home";
                }
            } else {
                console.log("no data is availible")
            }

        }
    }
    const handleCancel = () => {
        setIsModalOpen(false);
        setIsModalOpenOne(false)
        setIsModalOpenTwo(false)
        setIsModalOpenThree(false)
    }

    const HomeBtn = () => {
        window.location.href = "/home"
    }
    return (
        <>
            <div className="login-section">
                <div className="container">
                    <div className="login">
                        <div className="login-left">
                            <img src={login} />
                        </div>
                        <div className="login-right">
                            <div className="img">
                                <img onClick={HomeBtn} src={logonew} />
                            </div>
                            <Form
                                name="basic"
                                onFinish={loginHandle}
                                autoComplete="off"
                            >
                                <Form.Item
                                    label="name"
                                    // name="name"
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Please input your user id!',
                                        },
                                    ]}
                                >
                                    <Input
                                        onChange={inputval}
                                        name="name"
                                        value={val.name}
                                    />
                                </Form.Item>
                                <Form.Item
                                    label="Password"
                                    // name="password"
                                    rules={[{ required: true, message: 'Enter your Password!' }]}
                                >
                                    <Input.Password maxLength={16}
                                        onChange={inputval}
                                        name="password"
                                        value={val.password}
                                    />
                                </Form.Item>
                                <Form.Item>
                                    <Button htmlType="submit">Login</Button>
                                </Form.Item>
                            </Form>
                            <span>
                                <NavLink className="forgot-pswd">
                                    Forgot Password?
                                </NavLink>
                            </span>
                            <p>
                                Not having an account yet? <NavLink to="/signin">Sign Up Now</NavLink>
                            </p>
                            <div>
                                <Modal title="Error" open={isModalOpen} onCancel={handleCancel}>
                                    <p>please fill username</p>
                                </Modal>
                                <Modal title="Error" open={isModalOpenOne} onCancel={handleCancel}>
                                    <p>please fill password</p>
                                </Modal>
                                <Modal title="Error" open={isModalOpenTwo} onCancel={handleCancel}>
                                    <p>invalid username or password</p>
                                </Modal>
                                <Modal title="Error" open={isModalOpenThree} onCancel={handleCancel}>
                                    <p>login sucessfully</p>
                                </Modal>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Loginone