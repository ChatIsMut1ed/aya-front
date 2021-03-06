import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";

import { useLoginUser } from "../../Hooks/api/auth.api";
import { useAuthDispatch } from "../../stores/auth.store.js";
import { ProgressSpinner } from "primereact/progressspinner";
export const Login = () => {
    // work
    const authDispatch = useAuthDispatch();
    const history = useHistory();

    const [loginForm, setLoginForm] = useState({
        email: "",
        password: "",
    });

    const [loginFormErrors, setLoginFormErrors] = useState({});

    const loginUserMutation = useLoginUser();

    const handleSubmit = async (e) => {
        e.preventDefault();
        loginForm.password = loginForm.password.trim();
        // console.log(loginForm);
        try {
            const result = await loginUserMutation.mutateAsync(loginForm);
            // const result = {
            //     data: {
            //         login_status: "successful",
            //         user: {
            //             username: "ala",
            //             age: 28,
            //         },
            //     },
            // };
            console.log(result.data.login_status);
            if (result.data.login_status === "already_logged") {
                history.push("Portfolio");
            }
            if (result.data.login_status === "successful") {
                authDispatch({
                    type: "ADD_LOGGED_IN_USER",
                    loggedInUser: {
                        isLoggedIn: true,
                        user: result.data.user,
                    },
                });
                history.push({
                    pathname: "/Portfolio",
                    // state: { username: result.data.user.username },
                });
            }
        } catch (error) {
            setLoginFormErrors(error?.response?.data);
        }
    };

    const handleChange = (e) => {
        setLoginForm({ ...loginForm, [e.target.name]: e.target.value });
    };
    return (
        <>
            <>
                <link href="https://fonts.googleapis.com/css?family=Quicksand&display=swap" rel="stylesheet" />
            </>
            <div className="pipi">
                <div className="custom">
                    <div className="contact-box" style={{ minHeight: "480px" }}>
                        <div className="left"></div>
                        <div className="righ">
                            <form autoComplete="on" onSubmit={handleSubmit}>
                                <h2 className="reo">Se Connecter</h2>
                                {loginFormErrors?.message && <p style={{ color: "red" }}>{loginFormErrors?.message}</p>}
                                <input value={loginForm.email} onChange={(e) => handleChange(e)} type="text" autoComplete="on" name="email" className="field" placeholder="email" required />
                                <input value={loginForm.password} onChange={(e) => handleChange(e)} type="password" autoComplete="on" name="password" className="field" placeholder="mot de passe" style={{ borderRadius: "15px", padding: "11px 11px" }} required />
                                {loginUserMutation.isLoading ? (
                                    <ProgressSpinner />
                                ) : (
                                    <button type="submit" className="btn1">
                                        Login
                                    </button>
                                )}
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
