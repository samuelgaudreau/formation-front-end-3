// ITEMS

export const ADD_ITEM = "ADD_ITEM";
export const GET_ITEMS = "GET_ITEMS";

export const addItemToCart = (id, name, price) => {
    return {
        type: ADD_ITEM,
        payload: {
            id,
            name,
            price
        }
    }
} 

export function getItems() {
    return {
        type: GET_ITEMS,
        payload: {}
    };
}

// API

export const API_REQUEST_SUCCEEDED = "API_REQUEST_SUCCEEDED";
export const API_REQUEST_FAILED = "API_REQUEST_FAILED";