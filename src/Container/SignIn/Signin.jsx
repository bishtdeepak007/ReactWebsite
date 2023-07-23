
import React, { useState } from "react";
import Form from 'antd/es/form';
import Input from 'antd/es/input';
import { Button, Modal } from 'antd';
// import login from "../../images/login-bg.jpg";
// import logonew from "../../images/logoNew.jpg";
import login from '../../Images/login-bg.jpg';
import logonew from '../../Images/logoNew.jpg';
import "./style.scss";

const Signin = () => {
    const [val, setVal] = useState({
        name: "",
        password: "",
        number: "",
        email: "",
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

        const { name, password, number, email } = val;
        console.log(name)
        if (name === "") {
            console.log("name is empty");
            setIsModalOpen(true)
        } else if (password === "") {
            console.log("password is empty");
            setIsModalOpenOne(true)

        } else if (number === "") {
            console.log("number is empty");
            setIsModalOpenTwo(true)
        }
        else if (email === "") {
            console.log("email is empty");
            setIsModalOpenThree(true)
        } else {
            console.log("successfully sign-up")
            localStorage.setItem("userinfo", JSON.stringify([val]));
            window.location.href = "/login";

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
            <div className="signin-section">
                <div className="container">
                    <div className="login">
                        <div className="login-left">
                            <img src={login} />
                        </div>
                        <div className="login-right">
                            <div className="img">
                                <img src={logonew} onClick={HomeBtn} />
                            </div>
                            <Form
                                name="basic"
                                onFinish={loginHandle}
                                autoComplete="off"
                            >
                                <Form.Item
                                    label="name"
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
                                    rules={[{ required: true, message: 'Enter your Password!' }]}
                                >
                                    <Input.Password maxLength={16}
                                        onChange={inputval}
                                        name="password"
                                        value={val.password}
                                    />
                                </Form.Item>
                                <Form.Item
                                    label="Number"
                                    rules={[{ required: true, message: 'Enter your Number!' }]}
                                >
                                    <Input maxLength={10}
                                        onChange={inputval}
                                        name="number"
                                        value={val.number}
                                    />
                                </Form.Item>
                                <Form.Item
                                    label="Email"
                                    // name="password"
                                    rules={[{ required: true, message: 'Enter your email!' }]}
                                >
                                    <Input maxLength={16}
                                        onChange={inputval}
                                        name="email"
                                        value={val.email}
                                    />
                                </Form.Item>
                                <Form.Item className="mt-4 mt-sm-0">
                                    <Button htmlType="submit">sign in</Button>
                                </Form.Item>
                            </Form>
                            <div>
                                <Modal title="empty field" open={isModalOpen} onCancel={handleCancel} onOk={handleCancel}>
                                    <p>please fill username</p>
                                </Modal>
                                <Modal title="empty field" open={isModalOpenOne} onCancel={handleCancel} onOk={handleCancel}>
                                    <p>please fill password</p>
                                </Modal>
                                <Modal title="empty field" open={isModalOpenTwo} onCancel={handleCancel} onOk={handleCancel}>
                                    <p>please fill number</p>
                                </Modal>
                                <Modal title="empty field" open={isModalOpenThree} onCancel={handleCancel} onOk={handleCancel}>
                                    <p>please fill email</p>
                                </Modal>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>);
}

export default Signin