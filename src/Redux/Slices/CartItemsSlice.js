import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const CartItemsSlice = createSlice({
    name : "cartItems",
    initialState,
    reducers : {
        addToCart : (state, action) => {
            state.push(action.payload)
        },
        removeFromCart : (state, action) => {
            const index = state.findIndex((item) => item.product.id === action.payload )
            if(index !== -1){
                state.splice(index,1)
            }
        },
        updateCart : (state, action) => {
            const index = state.findIndex((item) => item.product.id === action.payload.productId )
            if(index !== -1){
                if(action.payload.quentity == null || action.payload.quentity == "" || action.payload.quentity <= 0){
                    state.splice(index,1)
                }else{
                    state[index]['quentity'] = action.payload.quentity;
                }
                
            }
        },
    }
});

export const {addToCart,removeFromCart,updateCart} = CartItemsSlice.actions

export default CartItemsSlice.reducer;