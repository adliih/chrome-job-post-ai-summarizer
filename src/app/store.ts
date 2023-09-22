import { configureStore } from "@reduxjs/toolkit";
import settings from "../feature/settings/settings.slice";

const store = configureStore({
  reducer: {
    settings,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
