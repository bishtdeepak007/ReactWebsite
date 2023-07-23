
import React, { useContext, useEffect } from "react";
import { ContextData, formatPrice } from "../../App";
import { Rate } from 'antd';
import { Addtocart } from "../AddToCart/Addtocart";
import { TbTruckDelivery } from 'react-icons/tb';
import { TbReplace } from 'react-icons/tb';
import { BiShieldQuarter } from 'react-icons/bi';
import { Link, useParams } from "react-router-dom";
import './style.scss';

export const Singleproduct = () => {

    // const [val, setVal] = useState([]);
    // getr URL using location method

    // const search = useLocation();
    // // cut string using substring method
    // const string = search.pathname;
    // const trimmedString = string.substring(9);
    // const trimmedString = useParams()
    // const search = location.pathname;
    // const string = search;
    // const trimmedString = string.substring(9);
    const { id } = useParams();

    const singleData = useContext(ContextData);
    const { getSingleProduct, singleProduct, singleProductImage } = singleData;
    const { name, stars, price, description, company, stock, reviews } = singleProduct;
    console.log(singleProduct)
    useEffect(() => {
        getSingleProduct(`?id=${id}`)
    }, [])

    return (
        <>
            <section className="single-product">
                <div className="container">
                    <div className="back">
                        <span>
                            <Link to="/products">Product</Link>
                            /{name}
                        </span>
                    </div>
                    <div className="single-product-main">
                        <div className="single-product-left">
                            {singleProductImage.map((elem, index) => {
                                if (index === 0) {
                                    const xyz = elem
                                    return (
                                        <>
                                            <div className="single-img-left"
                                                key={index}
                                            >
                                                <img src={xyz.url} alt={xyz.filename} />
                                            </div>
                                        </>
                                    )
                                }
                                return (
                                    <div className="single-img-right">
                                        <img src={elem.url} alt={elem.filename} />
                                    </div>
                                )
                            })}

                        </div>
                        <div className="single-product-right">
                            <h2>{name}</h2>
                            <p>
                                <Rate disabled allowHalf value={stars} />
                                <span>({reviews} customer reviews)</span>
                            </p>
                            <p>MRP:
                                <del className="del">{formatPrice(price + 2000)}</del>
                            </p>
                            <p className="deal">Deal Of The Day:
                                <span className="format-price">{formatPrice(price)}</span>
                            </p>
                            <p>{description}</p>

                            <div className="icons">
                                <p className="icons-p">
                                    <span><TbTruckDelivery /></span>
                                    <p>Free Delivery</p>
                                </p>
                                <p className="icons-p">
                                    <span> <TbReplace /></span>

                                    <p>30 Days Replacement</p>
                                </p>
                                <p className="icons-p">
                                    <span><BiShieldQuarter /></span>

                                    <p>2 Year Warranty</p>
                                </p>
                                <p className="icons-p">
                                    <span><TbTruckDelivery /></span>
                                    <p>tang Delivery</p>
                                </p>
                            </div>
                            <hr />
                            <div className="info">
                                <div>
                                    <span className="avail">Available:</span>
                                    <span>{stock > 0 ? "In Stock" : "Not Available"}</span>
                                </div>

                                <div>
                                    <span className="brand"> Brand:</span>
                                    <span>{company}</span>
                                </div>
                            </div>
                            <hr />
                            {stock > 0 && <Addtocart sProduct={singleProduct} />}
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
