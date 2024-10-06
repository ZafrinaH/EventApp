import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: null,
    userLoading: false,
    firstTime: false
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser: (state, action) => {
            state.user = action.payload;
        },
        setUserLoading: (state, action) => {
            state.userLoading = action.payload;
        },
        setFirstTime: (state, action) => {
            state.firstTime = action.payload;
        },
        clearUser: (state, action) => {
            state.user = {}
        }
    }
})

export const { setUser, setUserLoading, setFirstTime } = userSlice.actions;

export default userSlice.reducer;