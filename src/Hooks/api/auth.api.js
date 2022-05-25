import React from "react";
import axios from "axios";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { useHistory } from "react-router-dom";
import { useAuthDispatch, useAuthStore } from "../../stores/auth.store";

export const useAuth = () => {
    const [isAuth, setIsAuth] = React.useState(true);
    React.useEffect(() => {
        function handleAuth() {
            console.log(isAuth);
        }
        handleAuth();
    }, []);

    return isAuth;
};

export function useRegisterUser() {
    return useMutation(
        async (values) => {
            const res = await axios.post(`register`, values);
            return res.data;
        },
        {
            onSuccess: () => {},
        }
    );
}

export function useLoginUser() {
    return useMutation(
        async (values) => {
            await axios.get(`sanctum/csrf-cookie`);
            const res = await axios.post("login", values);
            return res.data;
        },
        {
            retry: 1,
            onSuccess: () => {},
        }
    );
}

export function useLogoutUser() {
    return useMutation(
        ["logout-user"],
        async (values) => {
            await axios.get(`sanctum/csrf-cookie`);
            const res = await axios.post("logout", values);
            return res.data;
        },
        {
            onSuccess: () => {
                // authDispatch({
                // 	type: "REMOVE_LOGGED_IN_USER",
                // });

                window.location.hash = "/login";
            },
        }
    );
}

export const useLoginStatus = (ignoreInterceptor = false, location, noOnSucces) => {
    const authDispatch = useAuthDispatch();
    const history = useHistory();
    return useQuery(
        ["loginStatus", location],
        async () => {
            if (ignoreInterceptor) {
                // console.log("interceptor ignored");
                const uninterceptedAxiosInstance = axios.create();
            }

            const promise = axios.get(`/user/login-status`, {}).then((res) => res.data);

            return promise;
        },
        {
            staleTime: 0,
            refetchInterval: false,
            cacheTime: 0,
            // cacheTime: Infinity,
            onSuccess: (data) => {
                if (!noOnSucces && data.authenticate_status === "authenticated") {
                    authDispatch({
                        type: "ADD_LOGGED_IN_USER",
                    });
                }
            },
            onError: () => {
                history.push("/");
            },
        }
    );
};
