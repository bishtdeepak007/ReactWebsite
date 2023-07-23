import React from 'react';
import './style.scss';
// import { formatPrice } from "../App";
import { formatPrice } from '../../App';
import { Spin } from 'antd';
// import { NavLink } from "react-router-dom/cjs/react-router-dom";
import { NavLink } from 'react-router-dom';

const Gridview = ({ filterProducts, product, loading, sort }) => {
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

    // const xyz = ["deepak", "rahul", "abi", "citara"];
    // if (filter) {
    //   const fi = xyz.map((elem) => {
    //     return elem.toLowerCase().includes(filter);
    //   })
    //   console.log(fi)
    // }

    // if (filter) {
    //   const filt = product.map((elem) => {
    //     return elem.toLowerCase().includes(filter);
    //   })
    //   console.log(filt)
    // }
    // const [current, setCurrent] = useState();

    // const onChange = (page) => {
    //   console.log(page);
    //   setCurrent(page);
    // };
    return (
        <>

            <section className="grid-section">
                <div className="loading">
                    {loading ? <Spin size="large" tip="Loading..." /> : null}
                </div>
                <div className="grid-main">
                    {product.map((elem) => {
                        const { id, name, company, price, image, description } = elem;
                        return (
                            <NavLink to={`/product/${id}`} key={id}>
                                <div className="grid-inner" >
                                    <div className="grid-img">
                                        <img src={image} alt="gridd-img" />
                                    </div>
                                    <div className="grid-info">
                                        <p>{name}</p>
                                        <p> {formatPrice(price)}</p>
                                    </div>
                                    {/* <div>
                      <p className="description"> {description.slice(0, 99)}....</p>
                    </div> */}
                                </div>
                            </NavLink>
                        )
                    })}
                </div>
            </section>
        </>
    );
}

export default Gridview