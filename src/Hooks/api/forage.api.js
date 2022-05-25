import React from "react";
import axios from "axios";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { useHistory } from "react-router-dom";
import { useAuthDispatch, useAuthStore } from "../../stores/auth.store";

// fake api https://jsonplaceholder.typicode.com/todos/1
export const useForage = () => {
    const authStore = useAuthStore();

    return useQuery(["Forages"], () => axios.get(`Forage`).then((res) => res.data), {
        enabled: authStore?.isLoggedIn === true && true,
        onSuccess: () => {},
        onError: () => {},
        refetchOnWindowFocus: false,
    });
};

export const useForageById = () => {
    const authStore = useAuthStore();

    return useMutation(
        async (values) => {
            const res = await axios.get(`Forage/${values}`);
            return res.data;
        },
        {
            enabled: authStore?.isLoggedIn === true && true,
            onSuccess: () => {},
        }
    );
};

export const useDeleteForageById = () => {
    const authStore = useAuthStore();

    return useMutation(
        async (values) => {
            const res = await axios.get(`Forage/${values}`);
            return res.data;
        },
        {
            enabled: authStore?.isLoggedIn === true && true,
            onSuccess: () => {},
        }
    );
};

export const useCreateForage = () => {
    const authStore = useAuthStore();

    return useMutation(
        async (values) => {
            const res = await axios.post("Forage", values);
            return res.data;
        },
        {
            enabled: authStore?.isLoggedIn === true && true,
            onSuccess: () => {},
            onError: () => {},
        }
    );
};

export const useModifyForage = () => {
    const authStore = useAuthStore();

    return useMutation(
        async (values) => {
            const res = await axios.put(`Forage/${values.id}`, values);
            return res.data;
        },
        {
            enabled: authStore?.isLoggedIn === true && true,
            onSuccess: () => {},
            onError: () => {},
        }
    );
};
