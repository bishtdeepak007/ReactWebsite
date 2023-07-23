import React, { useContext } from 'react';
import './style.scss';
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';
import { NavLink } from 'react-router-dom';
import { Button } from 'antd';
import { CartContext } from '../../App';
import { formatPrice } from '../../App';

const Cart = () => {
    const CartData = useContext(CartContext);
    const { cart, removeItem, clearCart, setDecrease, setIncrease, total_amount, shipping_fee, total_item } = CartData;
    return (
        <>
            <section className="cart-section">
                <div className="container">
                    <h2>Shopping Cart</h2>
                    <div className="cart-main">
                        {(cart.length !== 0) ?
                            <div className="cart-main-left">
                                {cart.map((elem) => {
                                    const { id, name, image, color, price, amount } = elem;

                                    return (
                                        <>
                                            <div className="cart-inner" >
                                                <div className="cart-left">
                                                    <img src={image} />
                                                </div>
                                                <div className="cart-mid">
                                                    <p>{name}</p>
                                                    <div className="color">Color:
                                                        <span style={{ background: color }}></span>
                                                    </div>
                                                    <div>{formatPrice(price)}</div>
                                                </div>
                                                <div className="cart-right">
                                                    <div className="inc-dec">
                                                        <button className="" onClick={() => setDecrease(id)}>
                                                            <AiOutlineMinus />
                                                        </button>
                                                        <p>{amount}</p>
                                                        <button onClick={() => setIncrease(id)}>
                                                            <AiOutlinePlus />
                                                        </button>
                                                    </div>
                                                    <button className="delete" onClick={() => removeItem(id)}>
                                                        delete
                                                    </button>
                                                </div>
                                            </div>
                                        </>
                                    )
                                })}
                                <div className="cart-extra">
                                    <NavLink to="/products" className="shopping">
                                        <Button>
                                            continue shopping
                                        </Button>
                                    </NavLink>
                                    <div className="clear">
                                        <Button onClick={clearCart}>clear cart</Button>
                                    </div>
                                </div>
                            </div> :
                            <></>
                        }

                        {(cart.length === 0) ?
                            <div className="no-cart">
                                <h2>no item in cart</h2>
                            </div>
                            :
                            <div className="cart-main-right">
                                <div className="cart-main-right-inner">
                                    <div className="cart-text">
                                        <p><span>item total:</span></p>
                                        <p><span>subtotal:</span></p>
                                        <p><span>shipping fee:</span></p>
                                        <p><span>order total:</span></p>
                                    </div>
                                    <div className="cart-total">
                                        <p>{total_item}</p>
                                        <p>{formatPrice(total_amount)}</p>
                                        <p>{formatPrice(shipping_fee)}</p>
                                        <p>{formatPrice(total_amount + shipping_fee)}</p>
                                    </div>
                                </div>
                                <div className="button">
                                    <Button>Proceed to Buy</Button>
                                </div>
                            </div>
                        }
                    </div>
                </div>
            </section>
        </>
    );
}

export default Cart