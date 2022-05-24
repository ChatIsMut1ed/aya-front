import MakeStore from "./makeStore";
import { authReducer } from "../reducers/auth.reducer";

let auth = {
    // initialUpdatePlayerProgressCountdown: new Date().getTime() + 5 * 60 * 1000,
    isLoggedIn: "loading",
};

const [AuthProvider, useAuthDispatch, useAuthStore] = MakeStore(authReducer, auth, "AuthStore");

export { AuthProvider, useAuthDispatch, useAuthStore };
