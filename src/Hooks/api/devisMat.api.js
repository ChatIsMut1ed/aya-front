import React from "react";
import axios from "axios";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { useHistory } from "react-router-dom";
import { useAuthDispatch, useAuthStore } from "../../stores/auth.store";

// fake api https://jsonplaceholder.typicode.com/todos/1
export const useDevisMat = () => {
    const authStore = useAuthStore();

    return useQuery(["DevisMats"], () => axios.get(`devis-mat`).then((res) => res.data), {
        //enabled: authStore?.isLoggedIn === true && true,
        onSuccess: () => {},
        onError: () => {},
        refetchOnWindowFocus: false,
    });
};

export const useDevisMatById = () => {
    const authStore = useAuthStore();

    return useMutation(
        async (values) => {
            const res = await axios.get(`devis-mat/${values}`);
            return res.data;
        },
        {
            //enabled: authStore?.isLoggedIn === true && true,
            onSuccess: () => {},
        }
    );
};

export const useDeleteDevisMatById = () => {
    const authStore = useAuthStore();

    return useMutation(
        async (values) => {
            const res = await axios.delete(`devis-mat/${values}`);
            return res.data;
        },
        {
            //enabled: authStore?.isLoggedIn === true && true,
            onSuccess: () => {},
        }
    );
};

export const useCreateDevisMat = () => {
    const authStore = useAuthStore();

    return useMutation(
        async (values) => {
            const res = await axios.post("devis-mat", values);
            return res.data;
        },
        {
            //enabled: authStore?.isLoggedIn === true && true,
            onSuccess: () => {},
            onError: () => {},
        }
    );
};

export const useModifyDevisMat = () => {
    const authStore = useAuthStore();

    return useMutation(
        async (values) => {
            const res = await axios.put(`devis-mat/${values.id}`, values);
            return res.data;
        },
        {
            //enabled: authStore?.isLoggedIn === true && true,
            onSuccess: () => {},
            onError: () => {},
        }
    );
};
