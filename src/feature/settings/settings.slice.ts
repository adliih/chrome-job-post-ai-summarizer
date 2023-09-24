import { createSlice } from "@reduxjs/toolkit";
import {
  Settings,
  defaultSettings,
  resetSettings,
  saveSettings,
} from "./storage";

const initialState: Settings = defaultSettings;

export const settingsSlice = createSlice({
  initialState,
  name: "settings",
  reducers: {
    update: (state, { payload }: { payload: Settings }) => {
      state.instructions = payload.instructions;
      state.keyPoints = payload.keyPoints;

      saveSettings({ ...state, ...payload });
    },
    reset: () => {
      resetSettings();
      return defaultSettings;
    },
  },
});

export const { update, reset } = settingsSlice.actions;

export default settingsSlice.reducer;
