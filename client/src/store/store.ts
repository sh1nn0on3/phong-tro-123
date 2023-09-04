import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./auth/authSlice";

export const store = configureStore({
  reducer: {
    // Add your reducers here
    auth: authSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
