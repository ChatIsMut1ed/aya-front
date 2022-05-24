import React from "react";
import axios from "axios";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { useHistory } from "react-router-dom";
import { useAuthDispatch, useAuthStore } from "../../stores/auth.store";

export function useDevisObj() {
    return useMutation(
        async (values) => {
            const res = await axios.post(`devis-obj`, values);
            return res.data;
        },
        {
            onSuccess: () => {},
        }
    );
}