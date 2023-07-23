
import React, { useState } from "react";
import Form from 'antd/es/form';
import Input from 'antd/es/input';
import { Button, Modal } from 'antd';
import { ContactApi } from "../../GetServices/AuthService";
import "./style.scss";

const Contact = () => {
    // const { TextArea } = Input;
    const [loginForm] = Form.useForm();
    const [isModalOpen, setIsModalOpen] = useState(false);


    const loginHandle = (val) => {
        console.log(val.name)
        ContactApi(val)
            .then((res) => {
                console.log(res)
                if (res.ok === true) {
                    loginForm.resetFields();
                    setIsModalOpen(true);
                }
            }).catch((error) => {
                console.log(error)
            })
    }
    const handleCancel = () => {
        setIsModalOpen(false)
    }
    return (
        <section className="contact-section">
            <h2>feel free to contact us</h2>
            <div>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501.5961244867854!2d77.29305597519316!3d28.641864275659632!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfb507bcdad23%3A0x99dceccc1660ae80!2sPreet%20Vihar%20Metro%20Station!5e0!3m2!1sen!2sin!4v1686422767538!5m2!1sen!2sin"
                    width="100%"
                    height="450"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade">
                </iframe>
            </div>
            <div className="container">
                <div className="contact-form">
                    <Form
                        form={loginForm}
                        name="basic"
                        onFinish={loginHandle}
                        autoComplete="off"
                    >
                        <Form.Item
                            label="Name"
                            name="name"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your name!',
                                },
                            ]}
                        >
                            <Input />
                        </Form.Item>

                        <Form.Item
                            label="Email"
                            name="email"
                            rules={[{ required: true, message: 'Enter your email!' }]}
                        >
                            <Input />
                        </Form.Item>

                        <Form.Item
                            label="Message"
                            name="message"
                            rules={[{ required: true, message: 'Enter your message!' }]}
                        >
                            <Input.TextArea rows={7} />
                        </Form.Item>

                        <Form.Item>
                            <Button htmlType="submit">Login</Button>
                        </Form.Item>
                    </Form>
                </div>
            </div>

            <Modal title="submit status" open={isModalOpen} onCancel={handleCancel} onOk={handleCancel}>
                <p>success</p>
            </Modal>
        </section>
    );
}

export default Contact