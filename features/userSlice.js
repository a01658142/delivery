import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {
    id: null,
    imgUrl: null,
    name: null,
    lastname: null,
    mail: null,
    phone: null,
    birth_date: null,
  },
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser:(state,action) => {
      state.user = action.payload;
    }
  },
})

// Action creators are generated for each case reducer function
export const { setUser } = userSlice.actions;

export const selectUser = (state) => state.user.user;

export default userSlice.reducer;