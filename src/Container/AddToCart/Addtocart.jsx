import React, { useContext, useState } from "react";
import './style.scss';
import { CheckOutlined } from '@ant-design/icons';
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';
import { Button } from "antd";
import { Link } from "react-router-dom";
import { CartContext } from "../../App";

export const Addtocart = ({ sProduct }) => {

    const cartContext = useContext(CartContext)

    const { goToCart } = cartContext;
    const { id, colors, stock } = sProduct;
    const [color, setColor] = useState(colors[0]);
    const [amount, setAmmount] = useState(1);


    const decrease = () => {
        amount > 1 ? setAmmount(amount - 1) : setAmmount(1)
    }
    const increase = () => {
        amount < stock ? setAmmount(amount + 1) : setAmmount(stock)
    }

    return (
        <>
            <section className="addtocart">
                <div className="color">
                    <p>Color:</p>
                    {colors.map((elem, index) => {
                        return (
                            <>
                                <button
                                    key={index}
                                    className={color === elem ? "cartbutton active" : "cartbutton"}
                                    style={{ background: elem }}
                                    onClick={() => setColor(elem)}>
                                    {color === elem ? <CheckOutlined /> : null}
                                </button>
                            </>
                        )
                    })}
                </div>
                <div className="cart">
                    <button onClick={() => decrease()}>
                        <AiOutlineMinus />
                    </button>
                    <p>{amount}</p>
                    <button onClick={() => increase()}>
                        <AiOutlinePlus />
                    </button>
                </div>
                <div className="addcart">
                    <Button >Add to Cart</Button>
                    {/* onClick={() => goToCart(id, color, amount, sProduct)} */}
                    <Link to="#">
                        <Button>Go to Cart</Button>
                    </Link>
                </div>
            </section>
        </>
    );
}
