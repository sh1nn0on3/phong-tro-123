import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { loginActions, registerActions } from "./authActions";


interface initialStateType {
  token: any | null;
  isLoading: boolean;
  user: any;
  error: number | null;
}

const initialState : initialStateType = {
  token: null,
  isLoading: false,
  user: null,
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logOut: (state) => {
      localStorage.removeItem("token");
      state.isLoading = false;
      state.error = null;
      state.user = null;
      state.token = null;
    },
  },
  extraReducers: (builder) => {
    // pending
    builder.addCase(loginActions.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(registerActions.pending, (state) => {
      state.isLoading = true;
    });

    // fulfilled
    builder.addCase(
      loginActions.fulfilled,
      (state, action: PayloadAction<any>) => {
        state.isLoading = false;
        state.error = action.payload.data.err;
        state.user = action.payload.data.msg;
        state.token = action.payload.data.token;
      }
    );
    builder.addCase(
      registerActions.fulfilled,
      (state, action: PayloadAction<any>) => {
        state.isLoading = false;
        state.error = action.payload.data.err;
        state.user = action.payload.data.msg;
        state.token = action.payload.data.token;
      }
    );

    // rejected
    builder.addCase(
      loginActions.rejected,
      (state, action: PayloadAction<any>) => {
        state.isLoading = false;
        state.error = action.payload;
        state.user = null;
        state.token = null;
      }
    );
    builder.addCase(
      registerActions.rejected,
      (state, action: PayloadAction<any>) => {
        state.isLoading = false;
        state.error = action.payload;
        state.user = null;
        state.token = null;
      }
    );
  },
});

export const { logOut } = authSlice.actions;

export default authSlice.reducer;
