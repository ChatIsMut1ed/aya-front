import React from "react";
import axios from "axios";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { useHistory } from "react-router-dom";
import { useAuthDispatch, useAuthStore } from "../../stores/auth.store";

export function useForage() {
    return useMutation(
        async (values) => {
            const res = await axios.post(`forage`, values);
            return res.data;
        },
        {
            onSuccess: () => {},
        }
    );
}
