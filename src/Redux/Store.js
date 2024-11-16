import { configureStore } from "@reduxjs/toolkit";

import CartItemsSlice from "./Slices/CartItemsSlice";

const Store = configureStore({
    reducer : CartItemsSlice
})


export default Store;