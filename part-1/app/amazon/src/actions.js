export const ADD_ITEM = "DoSomething";

export const addItemToCart = () => {
    return {
        type: ADD_ITEM,
        payload: {
            amount: 1
        }
    }
} 