import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const jokesSlice = createSlice({
    name: "jokes",
    initialState: { data: { setup: "Loading" }, status: "idle", error: null },
    extraReducers: builder => {
        builder.addCase(getJokeAsync.pending, (state) => {
            state.status = "loading";
        })
        .addCase(getJokeAsync.fulfilled, (state, action) => {
            state.status = "succeeded";
            state.data = action.payload;
        })
        .addCase(getJokeAsync.rejected, (state, action) => {
            // If we catch the error in getJokesAsync(), this won't be called.
            state.status = "error";
            state.error = action.error.message;
        })
    }
});

export const getJokeAsync = createAsyncThunk(
    "jokes/getJokeAsync",
    async () => {
        try {
            const response = await axios.get("https://official-joke-api.appspot.com/jokes/programming/random/");
            return response?.data?.[0];
        }
        catch (error) {
            console.log(`Get request failed: ${error}`);
            throw error;
        }
    }
);

export const { getJoke } = jokesSlice.actions;
export default jokesSlice.reducer;