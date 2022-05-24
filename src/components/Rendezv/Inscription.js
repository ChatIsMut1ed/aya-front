import React, { useState } from "react";
import "./Inscrip.css";

import { Link, useHistory } from "react-router-dom";

import { useRegisterUser } from "../../Hooks/api/auth.api";
import { useAuthDispatch } from "../../stores/auth.store.js";
export const Inscription = () => {
    // work
    const authDispatch = useAuthDispatch();
    const history = useHistory();

    const [registerForm, setregisterForm] = useState({
        nom: "",
        prenom: "",
        email: "",
        phone: "",
        adresse: "",
        cin: "",
        password: "",
    });

    const [registerFormErrors, setregisterFormErrors] = useState({});

    const registerUserMutation = useRegisterUser();

    const handleSubmit = async (e) => {
        e.preventDefault();
        registerForm.password = registerForm.password.trim();
        registerForm.nom = registerForm.nom.trim();
        registerForm.prenom = registerForm.prenom.trim();

        try {
            const result = await registerUserMutation.mutateAsync(registerForm);
            // const result = {
            //     data: {
            //         register_status: "successful",
            //         user: {
            //             username: "ala",
            //             age: 28,
            //         },
            //     },
            // };
            if (result.data.register_status === "successful") {
                history.push({
                    pathname: "/login",
                    // state: { username: result.data.user.username },
                });
            }
        } catch (error) {
            setregisterFormErrors(error?.response?.data);
        }
    };

    const handleChange = (e) => {
        setregisterForm({ ...registerForm, [e.target.name]: e.target.value });
    };

    return (
        <>
            <>
                <meta name="viewport" content="width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0" />
                <link href="https://fonts.googleapis.com/css?family=Quicksand&display=swap" rel="stylesheet" />
            </>
            <div className="pipi">
                <div className="custom">
                    <div className="contact-box">
                        <div className="left"></div>
                        <div className="righ">
                            <form autoComplete="on" onSubmit={handleSubmit}>
                                <h2 className="reo">Inscription</h2>
                                {registerFormErrors?.message && <p style={{ color: "red" }}>{registerFormErrors?.message}</p>}
                                <input value={registerForm.nom} onChange={(e) => handleChange(e)} type="text" autoComplete="on" name="nom" className="field" placeholder="Name" required />
                                <input value={registerForm.prenom} onChange={(e) => handleChange(e)} type="text" autoComplete="on" name="prenom" className="field" placeholder="Prenom" required />
                                <input value={registerForm.email} onChange={(e) => handleChange(e)} type="text" autoComplete="on" name="email" className="field" placeholder="Email" required />
                                <input value={registerForm.phone} onChange={(e) => handleChange(e)} type="text" autoComplete="on" name="phone" className="field" placeholder="Phone" required />
                                <input value={registerForm.cin} onChange={(e) => handleChange(e)} type="text" autoComplete="on" name="cin" className="field" placeholder="Cin" required />
                                <input value={registerForm.password} onChange={(e) => handleChange(e)} type="password" autoComplete="on" name="password" className="field" placeholder="password" style={{ borderRadius: "15px", padding: "11px 11px" }} required />
                                <input value={registerForm.adresse} onChange={(e) => handleChange(e)} type="text" autoComplete="on" name="adresse" className="field" placeholder="Adresse" required />

                                <button type="submit" className="btn1">
                                    register
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
