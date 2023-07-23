import React from 'react';
import './style.scss';
import { Button, Form, Input } from 'antd';
// import { NavLink } from "react-router-dom/cjs/react-router-dom.min";
import { NavLink } from 'react-router-dom';
import { InstagramOutlined, YoutubeOutlined, FacebookOutlined } from '@ant-design/icons';

export const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="footer-top">
          <p>Ready to get started?
            Talk too us today
          </p>
          <NavLink to="/Contact">
            <Button>get started</Button>
          </NavLink>
        </div>
        <div className="footer-mid">
          <div className="footer-mid-1">
            <h4>tang conqueror</h4>
            <p> Lorem ipsum dolor sit amet. Non<br />
              velit dolor qui sapiente expedita.</p>
          </div>
          <div className="footer-mid-2">
            <h4>subscribe to get important <br />updates</h4>
            <Form.Item
              name="username"
              rules={[
                {
                  required: true,
                  message: 'Please input your username!',
                },
              ]}
            >
              <Input type="email"
                placeholder="Username"
              />
            </Form.Item>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </div>
          <div className="footer-mid-3">
            <h4>follow us</h4>
            <div className="footer-mid-3-inner">
              <YoutubeOutlined />
              <InstagramOutlined />
              <FacebookOutlined />
            </div>
          </div>
          <div className="footer-mid-4">
            <h4>call us</h4>
            <p><a href="tel:8285700589">+91 8285700589</a></p>
          </div>
        </div>
        <div className="footer-last">
          <div className="">
            <p>@{new Date().getFullYear()} <abbr title="Gola & Bisht" style={{ color: "rgb(255 159 6)", textDecoration: "none" }}>GOBI Brothers</abbr> all rights reserved</p>
          </div>
          <div className="footer-policy">
            <p>privacy policy terms & conditions</p>
          </div>
        </div>
      </div>
    </footer>

  )
}
