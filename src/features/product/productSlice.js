import { createSlice } from "@reduxjs/toolkit";
const initialState = [
    { id: 1, name: 'Product 1', price: 5, cost: 2, units: 10, description: 'Test Description...' },
    { id: 2, name: 'Product 2', price: 6, cost: 3, units: 10, description: 'Test Description...' },
    { id: 3, name: 'Product 3', price: 10, cost: 5, units: 10, description: 'Test Description...' },
    { id: 4, name: 'Product 4', price: 20, cost: 5, units: 10, description: 'Test Description...' },
    { id: 5, name: 'Product 5', price: 4.5, cost: 4, units: 10, description: 'Test Description...' },
    { id: 6, name: 'Product 6', price: 1, cost: 0.5, units: 10, description: 'Test Description...' },
    { id: 7, name: 'Product 7', price: 5, cost: 2.5, units: 10, description: 'Test Description...' },
    { id: 8, name: 'Product 8', price: 200, cost: 100, units: 10, description: 'Test Description...' },
    { id: 9, name: 'Product 9', price: 5.6, cost: 2, units: 10, description: 'Test Description...' },
];
export const productSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        addProduct: (state, action) => {
            state.push(action.payload);
        },
        deleteProduct: (state, action) => {
            const px = state.find(p => p.id === action.payload);
            if (px) {
                state.splice(state.indexOf(px), 1)
            }
        }
    }
})
// Action creators are generated for each case reducer function
export const { addProduct, deleteProduct } = productSlice.actions
export default productSlice.reducer