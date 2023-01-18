import { createSlice } from "@reduxjs/toolkit";

export const uiSlice = createSlice({
  name: "ui",
  initialState: {
    isLogInModalOpen: false,
  },
  reducers: {
    onOpenLogInModal: (state) => {
      state.isLogInModalOpen = true;
    },
    onCloseLogInModal: (state) => {
      state.isLogInModalOpen = false;
    },
  },
});

// Action creators are generated for each case reducer function
export const { onOpenLogInModal, onCloseLogInModal } = uiSlice.actions;
