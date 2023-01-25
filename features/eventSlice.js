import { createSlice } from "@reduxjs/toolkit";

export const eventSlice = createSlice({
  name: "event",
  initialState: {
    event: [],
  },
  reducers: {
    setevent: (state, action) => {
      state.event = [...state.event, action.payload];
    },

    removeFromEvent: (state, action) => {
      let newEvent = [...state.event].filter(
        (event) => event.id !== action.payload.id
      );
      state.event = newEvent;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setevent, removeFromEvent } = eventSlice.actions;

export const selectevent = (state) => state.event.event;

export default eventSlice.reducer;
