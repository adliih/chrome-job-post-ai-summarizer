import { createSlice } from "@reduxjs/toolkit";
import { Settings, getSettings, saveSettings } from "./storage";

const initialState: Settings = await getSettings();

export const settingsSlice = createSlice({
  initialState,
  name: "settings",
  reducers: {
    update: (state, { payload }: { payload: Settings }) => {
      state.instructions = payload.instructions;
      state.keyPoints = payload.keyPoints;

      saveSettings({ ...state, ...payload });
    },
  },
});

export const { update } = settingsSlice.actions;

export default settingsSlice.reducer;
