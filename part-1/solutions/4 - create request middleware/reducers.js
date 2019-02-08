import { ADD_ITEM } from "./actions";
import { API_REQUEST_SUCCEEDED } from "./actions";

const initialState = {
    cartAmount: 0,
    cartItems: [],
    availableItems: []
}

export function rootReducers(state = initialState, { type, payload }) {
    switch(type) {
        case ADD_ITEM:
            return {
                ...state,
                cartAmount: state.cartAmount + payload.price,
                cartItems: [...state.cartItems, { id: payload.id, name: payload.name, price: payload.price }]
            };
        case API_REQUEST_SUCCEEDED:
            return {
                ...state,
                availableItems: payload
            }
        default:
            return state;
    }
}