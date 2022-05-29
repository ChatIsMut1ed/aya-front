import React from "react";
import axios from "axios";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { useHistory } from "react-router-dom";
import { useAuthDispatch, useAuthStore } from "../../stores/auth.store";

// fake api https://jsonplaceholder.typicode.com/todos/1
export const useContact = () => {
    const authStore = useAuthStore();

    return useQuery(["contact"], () => axios.get(`contact`).then((res) => res.data), {
        // enabled: authStore?.isLoggedIn === true && true,
        onSuccess: () => {},
        onError: () => {},
        refetchOnWindowFocus: false,
    });
};

export const useContactRespond = () => {
    const authStore = useAuthStore();

    return useMutation(
        async (values) => {
            const res = await axios.post("contact", values);
            return res.data;
        },
        {
            // enabled: authStore?.isLoggedIn === true && true,
            onSuccess: () => {},
            onError: () => {},
        }
    );
};

export const useContactDelete = () => {
    const authStore = useAuthStore();

    return useMutation(
        async (values) => {
            console.log(values);
            const res = await axios.delete(`contact/${values}`);
            return res.data;
        },
        {
            // enabled: authStore?.isLoggedIn === true && true,
            onSuccess: () => {},
            onError: () => {},
        }
    );
};
