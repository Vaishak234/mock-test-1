
import { createSlice } from "@reduxjs/toolkit"
import { addProduct, deteteProduct, fetchAllProducts, updateProduct } from "./productsActions"



const initialState = {
    products:[],
    status: 'idle',
    error: null
}

const productsSlice = createSlice({
    name: "products",
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchAllProducts.pending, (state) => {
                state.status = "loading"
                state.error = null
            })
            .addCase(fetchAllProducts.fulfilled, (state,action) => {
                state.status = "success"
                
                state.products = action.payload
                 state.error = null
            })
            .addCase(fetchAllProducts.rejected, (state,action) => {
                state.status = "failed"
                state.error = 'error in fetching products'
            })
            .addCase(addProduct.fulfilled, (state) => {
               
            })
            .addCase(updateProduct.fulfilled, (state, action) => {
                
            })
            .addCase(deteteProduct.rejected, (state) => {
                
            })
           
    }
})


export default productsSlice.reducer
export const selectProducts = state=> state.products