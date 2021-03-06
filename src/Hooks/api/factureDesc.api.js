import React from "react";
import axios from "axios";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { useHistory } from "react-router-dom";
import { useAuthDispatch, useAuthStore } from "../../stores/auth.store";

// fake api https://jsonplaceholder.typicode.com/todos/1
export const useFactureDes = () => {
    const authStore = useAuthStore();

    return useQuery(["FactureDess"], () => axios.get(`desc-soc`).then((res) => res.data), {
        //enabled: authStore?.isLoggedIn === true && true,
        onSuccess: () => {},
        onError: () => {},
        refetchOnWindowFocus: false,
    });
};

export const useFactureDesById = () => {
    const authStore = useAuthStore();

    return useMutation(
        async (values) => {
            const res = await axios.get(`desc-soc/${values}`);
            return res.data;
        },
        {
            //enabled: authStore?.isLoggedIn === true && true,
            onSuccess: () => {},
        }
    );
};

export const useDeleteFactureDesById = () => {
    const authStore = useAuthStore();

    return useMutation(
        async (values) => {
            const res = await axios.delete(`desc-soc/${values}`);
            return res.data;
        },
        {
            //enabled: authStore?.isLoggedIn === true && true,
            onSuccess: () => {},
        }
    );
};

export const useCreateFactureDes = () => {
    const authStore = useAuthStore();

    return useMutation(
        async (values) => {
            const res = await axios.post("desc-soc", values);
            return res.data;
        },
        {
            //enabled: authStore?.isLoggedIn === true && true,
            onSuccess: () => {},
            onError: () => {},
        }
    );
};

export const useModifyFactureDes = () => {
    const authStore = useAuthStore();

    return useMutation(
        async (values) => {
            const res = await axios.put(`desc-soc/${values.id}`, values);
            return res.data;
            // return values;
        },
        {
            //enabled: authStore?.isLoggedIn === true && true,
            onSuccess: (res) => {
                console.log(res);
            },
            onError: () => {},
        }
    );
};
