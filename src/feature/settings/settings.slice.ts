import { createSlice } from "@reduxjs/toolkit";
import { Settings, getSettings, saveSettings } from "./storage";

const initialState: Settings = await getSettings();

export const settingsSlice = createSlice({
  initialState,
  name: "settings",
  reducers: {
    update: (state, { payload }: { payload: Partial<Settings> }) => {
      if (payload.openAiApiKey) {
        state.openAiApiKey = payload.openAiApiKey;
      }

      saveSettings(state);
    },
  },
});

export const { update } = settingsSlice.actions;

export default settingsSlice.reducer;
