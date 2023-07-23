
import React, { useContext } from "react";
import { ContextData } from "../../App";
import './style.scss';
import Gridview from "../Gridview/Gridview";
import Listview from "../Listview/Listview";
import { BsFillGrid3X3GapFill } from 'react-icons/bs';
import { FaThList } from 'react-icons/fa';
import { Select } from 'antd';
import { Form, Input } from 'antd';
import { formatPrice } from "../../App";
import Button from 'antd/es/button';

const Product = () => {

    const allData = useContext(ContextData);
    const { products, setGridView, setListView, grid_view, isLoading, sorting, sorting_value, getInput, filter, filter_Products, clearFilter } = allData;
    const { text, max_price, min_price, price, color } = filter;

    //filter data
    const filterData = (data, property) => {
        let newValue = data.map((elem) => {
            return elem[property]
        })
        if (property === "colors") {
            newValue = newValue.flat()
        }
        return (
            newValue = ["all", ...new Set(newValue)]
        )
    }
    const categoryData = filterData(filter_Products, "category")
    const companyData = filterData(filter_Products, "company")
    const colorsData = filterData(filter_Products, "colors")
    console.log(categoryData)

    return (
        <>
            <section className="product-section">
                <div className="container">
                    <div className="product-inner">
                        <div className="product-left">
                            <div className="search">
                                <Form
                                    name="basic"
                                    autoComplete="off"
                                >
                                    <Form.Item
                                        name="item"
                                    >
                                        <Input onChange={getInput}
                                            name="text"
                                            placeholder="SEARCH"
                                            value={text}
                                        />
                                    </Form.Item>
                                </Form>
                            </div>
                            <div className="category">
                                <h4>category</h4>
                                <div>
                                    {categoryData.map((elem, index) => {
                                        return (
                                            <button
                                                onClick={getInput}
                                                type="button"
                                                value={elem}
                                                name="category"
                                            >{elem}</button>
                                        )
                                    })}
                                </div>
                            </div>
                            <div className="company">
                                <h4>company</h4>
                                <div>
                                    <select onClick={getInput} name="company">
                                        {companyData.map((elem, index) => {
                                            return (
                                                <option
                                                    type="button"
                                                    value={elem}
                                                    name="company"
                                                >{elem}</option>
                                            )
                                        })}
                                    </select>
                                </div>
                            </div>

                            <div className="color">
                                <h4>colors</h4>
                                <div className="color-inner">
                                    {colorsData.map((elem, index) => {
                                        if (elem === "all") {
                                            return (
                                                <>
                                                    <button
                                                        onClick={getInput}
                                                        type="button"
                                                        value={elem}
                                                        name="color"
                                                        className={color === elem ? "color-all active" : "color-all"}
                                                    >all</button>
                                                </>

                                            )
                                        }
                                        return (
                                            <button
                                                onClick={getInput}
                                                type="button"
                                                value={elem}
                                                name="color"
                                                className={color === elem ? "color-btn active" : "color-btn"}
                                                style={{ background: elem }}
                                            >
                                            </button>
                                        )
                                    })}
                                </div>
                            </div>
                            <div className="price">
                                <h4>price</h4>
                                <p>{formatPrice(price)}</p>
                                <div>
                                    <input
                                        onChange={getInput}
                                        type="range"
                                        value={price}
                                        name="price"
                                        max={max_price}
                                        min={min_price}
                                    ></input>
                                </div>
                            </div>
                            <div className="clear-filter">
                                <Button onClick={clearFilter}>Clear Filter</Button>
                            </div>
                        </div>
                        <div className="product-right">
                            <div className="product-right-top">
                                <div className="view-button">
                                    <button onClick={setGridView} className={grid_view ? "product-button active" : "product-button"}><BsFillGrid3X3GapFill /></button>
                                    <button onClick={setListView} className={!grid_view ? "product-button active" : "product-button"}><FaThList /></button>
                                </div>
                                <div>
                                    <h4>{products.length} products available</h4>
                                </div>
                                <div className="filter-search">
                                    <Select
                                        defaultValue="price(lowest)"
                                        style={{
                                            width: 120,
                                        }}
                                        onChange={sorting}
                                        options={[
                                            {
                                                value: 'lowest',
                                                label: 'price(lowest)',
                                            },
                                            {
                                                value: 'highest',
                                                label: 'price(highest)',
                                            },
                                            {
                                                value: 'a-z',
                                                label: 'name(a-z)',
                                            },
                                            {
                                                value: 'z-a',
                                                label: 'name(z-a)',
                                            },
                                        ]}
                                    />
                                </div>
                            </div>
                            <div>
                                {grid_view ? <Gridview product={products} loading={isLoading} sort={sorting_value} /> : <Listview product={products} sort={sorting_value} />}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Product