import React from "react";
import axios from "axios";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { useHistory } from "react-router-dom";
import { useAuthDispatch, useAuthStore } from "../../stores/auth.store";

// fake api https://jsonplaceholder.typicode.com/todos/1
export const useDevisObj = () => {
    const authStore = useAuthStore();

    return useQuery(["DevisObbjs"], () => axios.get(`devis-obj`).then((res) => res.data), {
        //enabled: authStore?.isLoggedIn === true && true,
        onSuccess: () => {},
        onError: () => {},
        refetchOnWindowFocus: false,
    });
};

export const useDevisObbjById = () => {
    const authStore = useAuthStore();

    return useMutation(
        async (values) => {
            const res = await axios.get(`devis-obj/${values}`);
            return res.data;
        },
        {
            //enabled: authStore?.isLoggedIn === true && true,
            onSuccess: () => {},
        }
    );
};

export const useDeleteDevisObbjById = () => {
    const authStore = useAuthStore();

    return useMutation(
        async (values) => {
            const res = await axios.delete(`devis-obj/${values}`);
            return res.data;
        },
        {
            //enabled: authStore?.isLoggedIn === true && true,
            onSuccess: () => {},
        }
    );
};

export const useCreateDevisObbj = () => {
    const authStore = useAuthStore();

    return useMutation(
        async (values) => {
            const res = await axios.post("devis-obj", values);
            return res.data;
        },
        {
            //enabled: authStore?.isLoggedIn === true && true,
            onSuccess: () => {},
            onError: () => {},
        }
    );
};

export const useModifyDevisObj = () => {
    const authStore = useAuthStore();

    return useMutation(
        async (values) => {
            const res = await axios.put(`devis-obj/${values.id}`, values);
            return res.data;
        },
        {
            //enabled: authStore?.isLoggedIn === true && true,
            onSuccess: () => {},
            onError: () => {},
        }
    );
};
