import React from "react";
import axios from "axios";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { useHistory } from "react-router-dom";
import { useAuthDispatch, useAuthStore } from "../stores/auth.store";

// fake api https://jsonplaceholder.typicode.com/todos/1
export const useNotification = () => {
    const authStore = useAuthStore();

    return useQuery(["notification"], () => axios.get(`notification`).then((res) => res.data), {
        //enabled: authStore?.isLoggedIn === true && true,
        onSuccess: () => {},
        onError: () => {},
        refetchOnWindowFocus: false,
    });
};
