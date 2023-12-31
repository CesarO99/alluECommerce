import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    email: "",
    firstName: "",
    lastName: "",
    _id: "",
}

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        loginRedux: (state, action) => {
            console.log(action.payload.data)
            state._id = action.payload.data._id;
            state.firstName = action.payload.data.firstName;
            state.lastName = action.payload.data.lastName;
        }
    }
})

export const { loginRedux } = userSlice.actions;

export default userSlice.reducer;