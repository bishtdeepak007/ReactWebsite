import { get, post } from './APIService';

// UAT server
// const BASE_URL = "https://rosalia.tangerine.insure"


// /* login Api */
// export const loginApi = (data) => {
//     const url = `${BASE_URL}/deviceTxnLayer/v1/login`;
//     return post(url, data);
// }
export const ContactApi = (data) => {
    const Url = "https://formspree.io/f/mjvddgag"
    return post(Url, data)
}

// product API
export const ProductApi = () => {
    const pUrl = "https://api.pujakaitem.com/api/products";
    return get(pUrl);
}
export const singProductApi = (Id) => {
    const pUrl = `https://api.pujakaitem.com/api/products${Id}`;
    return get(pUrl);
}

