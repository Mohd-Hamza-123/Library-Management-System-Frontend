import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    isDialogOpen: false
}

const booleanSlice = createSlice({
    name: 'booleanSlice',
    initialState: initialState,
    reducers: {
        setDialogOpen: (state) => {
            state.isDialogOpen = true
        },
        setDialogClose: (state) => {
            state.isDialogOpen = false
        }
    }
})

export const { setDialogOpen, setDialogClose } = booleanSlice.actions
export default booleanSlice.reducer