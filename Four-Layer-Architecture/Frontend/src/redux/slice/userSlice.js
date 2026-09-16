import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchUser } from "../../services/api";

export const fetchUserData = createAsyncThunk("/fetch/users", async () => {
  return await fetchUser();
});

const userSlice = createSlice({
  name: "user",
  initialState: {
    data: null,
    loading: false,
    error: false,
  },
  extraReducers: (builder) => {
    builder.addCase(fetchUserData.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
    });
    builder.addCase(fetchUserData.rejected,(state,action)=>{
        state.loading = false;
        state.error = true;
    });
    builder.addCase(fetchUserData.pending,(state,action)=>{
        state.loading = true;

    })
  },
});

export default userSlice.reducer;
