import React from "react";
import axios from "axios";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { useHistory } from "react-router-dom";
import { useAuthDispatch, useAuthStore } from "../../stores/auth.store";

// fake api https://jsonplaceholder.typicode.com/todos/1
export const useFacture = () => {
    const authStore = useAuthStore();

    return useQuery(["Factures"], () => axios.get(`Facture`).then((res) => res.data), {
        enabled: authStore?.isLoggedIn === true && true,
        onSuccess: () => {},
        onError: () => {},
        refetchOnWindowFocus: false,
    });
};

export const useFactureById = () => {
    const authStore = useAuthStore();

    return useMutation(
        async (values) => {
            const res = await axios.get(`Facture/${values}`);
            return res.data;
        },
        {
            enabled: authStore?.isLoggedIn === true && true,
            onSuccess: () => {},
        }
    );
};

export const useDeleteFactureById = () => {
    const authStore = useAuthStore();

    return useMutation(
        async (values) => {
            const res = await axios.get(`Facture/${values}`);
            return res.data;
        },
        {
            enabled: authStore?.isLoggedIn === true && true,
            onSuccess: () => {},
        }
    );
};

export const useCreateFacture = () => {
    const authStore = useAuthStore();

    return useMutation(
        async (values) => {
            const res = await axios.post("Facture", values);
            return res.data;
        },
        {
            enabled: authStore?.isLoggedIn === true && true,
            onSuccess: () => {},
            onError: () => {},
        }
    );
};

export const useModifyFacture = () => {
    const authStore = useAuthStore();

    return useMutation(
        async (values) => {
            const res = await axios.put(`Facture/${values.id}`, values);
            return res.data;
        },
        {
            enabled: authStore?.isLoggedIn === true && true,
            onSuccess: () => {},
            onError: () => {},
        }
    );
};
