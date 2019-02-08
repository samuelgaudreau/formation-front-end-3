import { ADD_ITEM } from "./actions";

const initialState = {
    amount: 0
}

export function rootReducers(state = initialState, action) {
    switch(action.type) {
        case ADD_ITEM:
            return {
                ...state,
                amount: state.amount + action.payload.amount
            };
        default:
            return state;
    }

}