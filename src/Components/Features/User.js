import {createSlice} from '@reduxjs/toolkit';

const initialStateValue = {name:"", age:0, email:""}
export const userSlice = createSlice({
    name: 'user',
    initialState: {value:initialStateValue},
    reducers: {
        login: (state, action) => {
            state.value = action.payload;
        },

        logout: (state) => { //we are resetting to empty value so we dont need a payload 
            state.value = initialStateValue;
        }
    }
})

export const {login, logout} = userSlice.actions

export default userSlice.reducer;