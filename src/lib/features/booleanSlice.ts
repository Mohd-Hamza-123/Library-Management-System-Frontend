import { createSlice, configureStore } from '@reduxjs/toolkit'

const booleanSlice = createSlice({
    name: 'counter',
    initialState: { value: 0 },
    reducers: {
        incremented: state => {
            state.value += 1
        },
        decremented: state => {
            state.value -= 1
        }
    }
})

export const { incremented, decremented } = booleanSlice.actions
export default booleanSlice.reducer