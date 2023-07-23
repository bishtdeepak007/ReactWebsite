import React from 'react';
import { Button } from 'antd';
import "./style.scss";
import { NavLink } from 'react-router-dom';

const Error = () => {
    return (
        <>
            <div className="error-section">
                <div className="container">
                    <div className="error-main">
                        <h2> 404</h2>
                        <h3> UH OH! You're Lost</h3>

                        <Button >
                            <NavLink to="/">go back to home
                            </NavLink>
                        </Button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Error