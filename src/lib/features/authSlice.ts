import { createSlice, configureStore } from '@reduxjs/toolkit'
import { UserData } from '@/types/userData'

const initialState = {
    userStatus: false,
    userData: null as UserData | null
}

const authSlice = createSlice({
    name: 'authSlice',
    initialState,
    reducers: {
        login: (state, action) => {
            state.userStatus = true
            state.userData = action.payload.userData
        },
        logout: (state) => {
            state.userStatus = false
            state.userData = null
        }
    }
})

export const { login, logout } = authSlice.actions
export default authSlice.reducer