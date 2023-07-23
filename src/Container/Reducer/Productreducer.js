// import { Input } from 'antd';
const Productreducer = (state, action) => {
    console.log(state)
    switch (action.type) {
        case "SET_LOADING":
            return {
                ...state,
                isLoading: true,
            };
        case "SET_API_DATA":

            // find max price filter
            const priceData = action.payload.map((elem) => {
                return elem.price
            })
            const maxPrice = Math.max(...priceData)

            // find max price filter

            // feature data
            const featurData = action.payload.filter((elem) => {
                return elem.featured;
            });
            // feature data

            // high price data
            let highPrice = action.payload.filter((elem) => {
                return elem.price
            });
            const maxPriceOne = highPrice.sort((a, b) => b - a).slice(0, 3)
            // high price data
            return {
                ...state,
                isLoading: false,
                filter_Products: action.payload,
                products: action.payload,
                featureProducts: featurData,
                high_price: maxPriceOne,
                filter: {
                    ...state.filter,
                    max_price: maxPrice,
                    price: maxPrice,
                }
            };
        case "API_ERROR":
            return {
                ...state,
                isLoading: false,
                isError: true,
            };
        case "SET_SINGLE_LOADING":
            return {
                ...state,
                isSingleLoading: true,
            };
        case "SET_SINGLE_PRODUCT":
            // const singleImage = action.payload.map()
            return {
                ...state,
                isSingleLoading: false,
                singleProduct: action.payload,
                singleProductImage: [...action.payload.image],


            };
        case "SET_SINGLE_ERROR":
            return {
                ...state,
                isSingleLoading: false,
                isError: true,

            };
        case "SET_GRID_VIEW":
            return {
                ...state,
                grid_view: true,
            };
        case "SET_LIST_VIEW":
            return {
                ...state,
                grid_view: false,
            };
        case "GET_SORT_VALUE":
            const sortValue = action.payload;
            return {
                ...state,
                sorting_value: sortValue,
            };
        case "SORTING_PRODUCTS":
            let newSortData;
            const sortProduct = [...state.filter_Products]
            const sorting = [...state.sorting_value]
            if (sorting === "lowest") {
                const sortingProduct = ((a, b) => {
                    return a.price - b.price;
                })
                newSortData = sortProduct.sort(sortingProduct)
            }
            if (sorting === "highest") {
                const sortingProduct = ((a, b) => {
                    return b.price - a.price;
                })
                newSortData = sortProduct.sort(sortingProduct)
            }
            if (sorting === "a-z") {
                newSortData = sortProduct.sort((a, b) => {

                    return a.name.localeCompare(b.name)
                })
            }
            if (sorting === "a-z") {
                newSortData = sortProduct.sort((a, b) => {

                    return a.name.localeCompare(b.name)
                })
            }
            if (sorting === "z-a") {
                newSortData = sortProduct.sort((a, b) => {

                    return b.name.localeCompare(a.name)
                })
            }
            return {
                ...state,
                products: newSortData,
            }

        case "GET_SEARCH_VALUE":
            const { name, value } = action.payload;
            return {
                ...state,
                filter:
                {
                    ...state.filter,
                    [name]: value,
                },
            };


        case "UPDATE_SEARCH_FILTER":
            let searchFilter = [...state.filter_Products];

            const { text, category, company, color, price } = state.filter;

            if (text) {
                searchFilter = searchFilter.filter((elem) => {
                    return elem.name.toLowerCase().includes(text);
                })
            }
            if (category !== "all") {
                searchFilter = searchFilter.filter((elem) => {
                    return elem.category === category
                })
            }
            if (company !== "all") {
                searchFilter = searchFilter.filter((elem) => {
                    return elem.company === company
                })
            }
            if (color !== "all") {
                searchFilter = searchFilter.filter((elem) => {
                    return elem.colors.includes(color)
                })
            }
            if (price === 0) {
                searchFilter = searchFilter.filter((elem) => {
                    return elem.price === price
                })
            } else {
                searchFilter = searchFilter.filter((elem) => {
                    return elem.price <= price
                })
            }
            return {
                ...state,
                products: searchFilter,
            }
        case "CLEAR_FILTER":
            return {
                ...state,
                filter: {
                    ...state.filter,
                    text: "",
                    category: "all",
                    company: "all",
                    color: "all",
                    max_price: state.filter.max_price,
                    min_Price: state.filter.max_price,
                    price: state.filter.max_price,
                },
            }

        default:
            return state;
    }
}
export default Productreducer

