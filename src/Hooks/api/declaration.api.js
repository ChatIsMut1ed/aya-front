import React from "react";
import axios from "axios";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { useHistory } from "react-router-dom";
import { useAuthDispatch, useAuthStore } from "../../stores/auth.store";

// fake api https://jsonplaceholder.typicode.com/todos/1
export const useDecla = () => {
    const authStore = useAuthStore();

    return useQuery(["Declas"], () => axios.get(`decla`).then((res) => res.data), {
        // enabled: authStore?.isLoggedIn === true && true,
        onSuccess: () => {},
        onError: () => {},
        refetchOnWindowFocus: false,
    });
};
export const useDeclaAll = () => {
    const authStore = useAuthStore();

    return useQuery(["Declas"], () => axios.get(`decla/all`).then((res) => res.data), {
        // enabled: authStore?.isLoggedIn === true && true,
        onSuccess: () => {},
        onError: () => {},
        refetchOnWindowFocus: false,
    });
};
export const useDeclaById = () => {
    const authStore = useAuthStore();

    return useMutation(
        async (values) => {
            const res = await axios.get(`decla/${values}`);
            return res.data;
        },
        {
            // enabled: authStore?.isLoggedIn === true && true,
            onSuccess: () => {},
        }
    );
};

export const useDeleteDeclaById = () => {
    const authStore = useAuthStore();

    return useMutation(
        async (values) => {
            const res = await axios.get(`decla/${values}`);
            return res.data;
        },
        {
            // enabled: authStore?.isLoggedIn === true && true,
            onSuccess: () => {},
        }
    );
};
export const useDeclaByCin = () => {
    const authStore = useAuthStore();

    return useMutation(
        async (values) => {
            const res = await axios.get(`client/${values}`);
            return res.data;
        },
        {
            //enabled: authStore?.isLoggedIn === true && true,
            onSuccess: () => {},
        }
    );
};
export const useCreateDecla = () => {
    const authStore = useAuthStore();

    return useMutation(
        async (values) => {
            const res = await axios.post("decla", values);
            return res.data;
        },
        {
            // enabled: authStore?.isLoggedIn === true && true,
            onSuccess: () => {},
            onError: () => {},
        }
    );
};

export const useModifyDecla = () => {
    const authStore = useAuthStore();

    return useMutation(
        async (values) => {
            const res = await axios.put(`decla/${values.id}`, values);
            return res.data;
        },
        {
            // enabled: authStore?.isLoggedIn === true && true,
            onSuccess: () => {},
            onError: () => {},
        }
    );
};
