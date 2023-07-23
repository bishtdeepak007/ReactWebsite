
import React from "react";
import "./style.scss";
import { formatPrice } from "../../App";
// import { formatPrice } from "../App";
// import { NavLink } from "react-router-dom/cjs/react-router-dom";
import { NavLink } from "react-router-dom";

const Listview = ({ product, sort }) => {
    if (sort === "a-z") {
        product.sort((a, b) => {
            return a.name.localeCompare(b.name)
        })
    } else if (sort === "z-a") {
        product.sort((a, b) => {
            return b.name.localeCompare(a.name)
        })
    } else if (sort === "lowest") {
        product.sort((a, b) => {
            return a.price - b.price;
        })
    } else if (sort === "highest") {
        product.sort((a, b) => {
            return b.price - a.price;
        })
    }
    return (
        <>
            <section className="list-section">
                {/* <div className="container"> */}
                <div className="list-main">
                    {product.map((elem) => {
                        console.log(elem)
                        const { id, name, company, price, image, description } = elem;
                        return (
                            <NavLink to={`/product/${id}`} key={id}>
                                <div className="list-inner" >
                                    <div className="list-img">
                                        <img src={image} alt="listd-img" />
                                    </div>
                                    <div className="list-info">
                                        <h4 className="name">{name}</h4>
                                        <p className="price"> {formatPrice(price)}</p>
                                        <p className="description"> {description.slice(0, 208)}....</p>
                                        <NavLink to={`/product/${id}`} key={id}>
                                            <button>Read More</button>
                                        </NavLink>
                                    </div>
                                </div>
                            </NavLink>
                        )
                    })}
                </div>
                {/* </div> */}
            </section>
        </>
    );
}

export default Listview