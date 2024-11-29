import {  createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


export const fetchAllProducts = createAsyncThunk('products/fetchAllProducts',  async (data, thunkAPI) => {
    try {
       
        const response = await axios.get('http://localhost:8000/products');
        return response.data
    } catch (error) {
        return thunkAPI.rejectWithValue(error.response?.data || error.message); 
    }
})

export const addProduct = createAsyncThunk('products/addProduct',  async (data, thunkAPI) => {
    try {
        const response = await axios.post('/add',data);
        return response.data
    } catch (error) {
        return thunkAPI.rejectWithValue(error.response?.data || error.message); 
    }
})
export const updateProduct = createAsyncThunk('products/updateProduct',  async (data, thunkAPI) => {
    try {
        const response = await axios.put(`/update/${data.id}`,data);
        return response.data
    } catch (error) {
        return thunkAPI.rejectWithValue(error.response?.data || error.message); 
    }
})

export const deteteProduct = createAsyncThunk('products/deteteProduct',  async (data, thunkAPI) => {
    try {
        const response = await axios.delete(`/delete/${data.id}`);
        return response.data
    } catch (error) {
        return thunkAPI.rejectWithValue(error.response?.data || error.message); 
    }
})