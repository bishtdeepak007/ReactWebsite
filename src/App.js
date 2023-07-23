
import React, { createContext, useEffect, useReducer, useState } from "react";
import axios from "axios";
// import Contact from "./Container/Contact/Contact";
// import Cart from "./Container/Cart/Cart";
// import Product from "./Container/Product/Product";
import Header from "./Components/Header/Header";
import Error from "./Container/Error/Error";
import { Footer } from "./Components/Footer/Footer";
// import { ProductApi, singProductApi } from "./GetServices/AuthService";
import reducerFun from './Container/Reducer/Productreducer';
import CartReducerFun from './Container/Reducer/Cartreducer';
import 'bootstrap/dist/css/bootstrap.min.css';
import Gototop from "./Container/Gototop/Gototop";
import './App.css';
import './style.scss';
import Home from "./Container/Home/Home";
import { Route, Routes } from "react-router-dom";
import Signin from "./Container/SignIn/Signin";
import Cart from "./Container/Cart/Cart";
import { Singleproduct } from "./Container/Singleproduct/Singleproduct";
import Contact from "./Container/Contact/Contact";
import Product from "./Container/Product/Product";
import About from "./Container/About/About";
import Loginone from "./Container/Login/Loginone";



// const xyz = localStorage.getItem("loginData")
// currency format
export const formatPrice = (value) => {
    return Intl.NumberFormat("en-IN", {
        style: "currency",
        currency: "INR",
        maximumFractionDigits: 2,
    }).format(value / 10)
};

export const ContextData = createContext();
export const CartContext = createContext();

function App() {
    const [pathname, setPathname] = useState("/");

    useEffect(() => {
        setPathname(window.location.pathname)
    }, [window.location.pathname])


    const initialState = {
        isLoading: false,
        isError: false,
        products: [],
        filter_Products: [],
        featureProducts: [],
        high_price: [],
        isSingleLoading: false,
        singleProduct: {},
        singleProductmultiImage: [],
        singleProductImage: [],
        grid_view: true,
        sorting_value: "",
        filter: {
            text: "",
            category: "all",
            company: "all",
            color: "all",
            max_price: 0,
            min_Price: 0,
            price: 0,
        },
    }

    const [state, dispatch] = useReducer(reducerFun, initialState);

    const getApiData = () => {
        dispatch({ type: "SET_LOADING" });
        axios.get("https://api.pujakaitem.com/api/products")
            .then((res) => {
                dispatch({ type: "SET_API_DATA", payload: res.data })
                // console.log(res.data)
            }).catch((error) => {
                console.log(error);
                dispatch({ type: "API_ERROR" })
            })
    }
    useEffect(() => {
        getApiData()
    }, [])

    //getSingleProduct
    const getSingleProduct = (url) => {
        dispatch({ type: "SET_SINGLE_LOADING" });
        const pUrl = `https://api.pujakaitem.com/api/products${url}`
        axios.get(pUrl)
            .then((res) => {
                console.log(res.data)
                dispatch({ type: "SET_SINGLE_PRODUCT", payload: res.data })
            }).catch((error) => {
                dispatch({ type: "SET_SINGLE_ERROR" })
            })
    }
    // grid-list view
    const setGridView = () => {
        dispatch({ type: "SET_GRID_VIEW" })
    }

    const setListView = () => {
        dispatch({ type: "SET_LIST_VIEW" })
    }

    //sorting function
    const sorting = (value) => {
        dispatch({ type: "GET_SORT_VALUE", payload: value })
    }

    // search function

    const getInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        return dispatch({ type: "GET_SEARCH_VALUE", payload: { name, value } })
    }

    useEffect(() => {
        dispatch({ type: "SORTING_PRODUCTS" })
        dispatch({ type: "UPDATE_SEARCH_FILTER" })

    }, [state.sorting_value, state.filter])

    // clear filter
    const clearFilter = () => {
        dispatch({ type: "CLEAR_FILTER" })
    }
    // get Data from localStorage
    const getLocalCartData = () => {
        let localData = localStorage.getItem("cartData")
        if (localData === []) {
            return [];
        } else {
            return JSON.parse(localData)
        }
    }


    // cart context
    const cartInitialState = {
        cart: getLocalCartData(),
        total_item: "",
        cart_item: "",
        total_amount: "",
        shipping_fee: 500,
        cart_successful: false
    }

    const [cartState, dispatchOne] = useReducer(CartReducerFun, cartInitialState)

    const goToCart = (id, color, amount, sProduct) => {
        dispatchOne({ type: "ADD_TO_CART", payload: { id, color, amount, sProduct } })
    }

    // inc and dec in cart
    const setDecrease = (id) => {
        dispatchOne({ type: "SET_DECREMENT", payload: id })
    }
    const setIncrease = (id) => {
        dispatchOne({ type: "SET_INCREMENT", payload: id })
    }

    const removeItem = (id) => {
        dispatchOne({ type: "REMOVE_ITEM", payload: id })
    }

    const quantity = (val) => {
        dispatch({ type: "CHANGE_QUANTITY", payload: val })
        console.log(val)
    }

    // add data in localStorage
    useEffect(() => {
        dispatchOne({ type: "CART_ITEM" });
        dispatchOne({ type: "CART_TOTAL_ITEM" });
        dispatchOne({ type: "CART_TOTAL_AMOUNT" });
        localStorage.setItem("cartData", JSON.stringify(cartState.cart))
    }, [cartState.cart]);

    // clearcart data

    const clearCart = () => {
        dispatchOne({ type: "CLEAR_CART" })
    }

    return (
        <>
            <ContextData.Provider value={{ ...state, getSingleProduct, setGridView, setListView, sorting, getInput, clearFilter }}>
                <CartContext.Provider value={{ ...cartState, goToCart, removeItem, clearCart, setDecrease, setIncrease, quantity }}>
                    {/* <Header /> */}

                    {!['/signin', '/login'].includes(
                        pathname,
                    ) && <Header />}
                    <Routes>
                        <Route path="/" Component={Home} />
                        <Route path="/home" Component={Home} />
                        <Route path="/about" Component={About} />
                        <Route path="/products" Component={Product} />
                        <Route path="/contact" Component={Contact} />
                        <Route path="/product/:id" Component={Singleproduct} />
                        <Route path="/signin" Component={Signin} />
                        <Route path="/login" Component={Loginone} />
                        <Route path="/cart" Component={Cart} />
                        <Route path="*" Component={Error} />
                    </Routes>
                    <Gototop />
                    {/* <Footer /> */}

                    {!['/signin', '/login'].includes(
                        pathname,
                    ) && <Footer />}
                </CartContext.Provider>
            </ContextData.Provider>
        </>
    );
}

export default App;
