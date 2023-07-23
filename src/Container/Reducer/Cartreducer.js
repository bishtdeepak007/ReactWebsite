
const CartReducer = (StateOne, action) => {

    if (action.type === "ADD_TO_CART") {
        let { id, color, amount, sProduct } = action.payload

        // handle exizting cart product

        const existProduct = StateOne.cart.find((elem) => {
            return elem.id === id + color;
        })
        // console.log(existProduct)
        let newamount;
        if (existProduct) {
            const updateCart = StateOne.cart.map((elem) => {
                if (elem.id === id + color) {
                    newamount = elem.amount + amount;

                    if (newamount > elem.max) {
                        newamount = elem.max;
                    }
                    return {
                        ...elem,
                        amount: newamount,
                    }
                } else {
                    return elem;
                }
            })
            return {
                ...StateOne,
                cart: updateCart,
            }
        } else {
            let cartProduct = {
                id: id + color,
                name: sProduct.name,
                color,
                amount,
                price: sProduct.price,
                max: sProduct.stock,
                image: sProduct.image[0].url,
            }
            return {
                ...StateOne,
                cart: [...StateOne.cart, cartProduct]
            }
        }
    }
    // inc and dec
    if (action.type === "SET_DECREMENT") {
        const changeammount = StateOne.cart.map((elem) => {
            if (elem.id === action.payload) {
                let incAmount = elem.amount - 1;
                if (incAmount <= 1) {
                    incAmount = 1;
                }
                return {
                    ...elem,
                    amount: incAmount
                }
            } else {
                return elem;
            }
        })
        return {
            ...StateOne,
            cart: changeammount,
        }
    };
    if (action.type === "SET_INCREMENT") {
        const changeammount = StateOne.cart.map((elem) => {
            if (elem.id === action.payload) {
                let decAmount = elem.amount + 1;
                if (decAmount >= elem.max) {
                    decAmount = elem.max;
                }
                return {
                    ...elem,
                    amount: decAmount
                }
            } else {
                return elem;
            }
        })
        return {
            ...StateOne,
            cart: changeammount,
        }
    };

    if (action.type === "REMOVE_ITEM") {
        const updateCart = StateOne.cart.filter((elem) => {
            return elem.id !== action.payload
        })
        return {
            ...StateOne,
            cart: updateCart,
        }
    }
    if (action.type === "CLEAR_CART") {
        return {
            ...StateOne,
            cart: []
        }
    }
    // if (action.type === "CART_TOTAL_ITEM") {
    //     const updatecartitem = StateOne.cart.reduce((initialVal, elem) => {
    //         initialVal = initialVal + elem.amount
    //         return initialVal;
    //     }, 0)
    //     return {
    //         ...StateOne,
    //         total_item: updatecartitem,
    //     }
    // }

    // if (action.type === "CART_ITEM") {
    //     const updatecartitem = StateOne.cart.reduce((initialVal, elem) => {
    //         initialVal = initialVal + elem.amount
    //         return initialVal;
    //     }, 0)
    //     return {
    //         ...StateOne,
    //         cart_item: updatecartitem,
    //     }
    // }
    // if (action.type === "CART_TOTAL_AMOUNT") {
    //     const updateAmount = StateOne.cart.reduce((initialValue, elem) => {
    //         initialValue = initialValue + elem.price * elem.amount;
    //         return initialValue;
    //     }, 0)
    //     return {
    //         ...StateOne,
    //         total_amount: updateAmount,
    //     }
    // }
    return StateOne
}

export default CartReducer