import { ADD_ITEM } from "./actions";

const initialState = {
    amount: 0,
    items: []
}

export function rootReducers(state = initialState, { type, payload }) {
    switch(type) {
        case ADD_ITEM:
            return {
                ...state,
                amount: state.amount + payload.price,
                items: [...state.items, { id: payload.id, name: payload.name, price: payload.price }]
            };
        default:
            return state;
    }
}