import React from "react";
import "./Forme5.css";
import { useState } from "react";
import { Link, useHistory } from "react-router-dom";

import { useDevisMat } from "../../Hooks/api/devisMat.api";
import { useAuthDispatch } from "../../stores/auth.store.js";

export const Forme5 = () => {
    // work
    const authDispatch = useAuthDispatch();
    const history = useHistory();

    const [DevisMatForm, setDevisMatForm] = useState({
        lib: "",
        prix: "",
        unit: "",
    });

    const [DevisMatFormErrors, setDevisMatFormErrors] = useState({});

    const DevisMatMutation = useDevisMat();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const result = await DevisMatMutation.mutateAsync(DevisMatForm);
            if (result.data.Forage_status === "successful") {
                history.push({
                    pathname: "/DemandeExpertiseForage",
                    // state: { username: result.data.user.username },
                });
            }
        } catch (error) {
            setDevisMatFormErrors(error?.response?.data);
        }
    };

    const handleChange = (e) => {
        setDevisMatForm({ ...DevisMatForm, [e.target.name]: e.target.value });
    };

    return (
        <>
            <div className="gla">
                <div class="form-style-10">
                    <h1>
                        Veuillez remplir les renseignements!<span>de votre demande de devis des matiéres</span>
                    </h1>
                    <form onSubmit={handleSubmit}>
                        <div class="section">
                            <span>1</span> Désignation
                        </div>
                        {DevisMatFormErrors?.message && <p style={{ color: "red" }}>{DevisMatFormErrors?.message}</p>}
                        <div class="inner-wrap">
                            <label>
                                Désignation
                                <input value={DevisMatForm.lib} onChange={(e) => handleChange(e)} type="text" autoComplete="on" name="lib" />
                            </label>
                        </div>

                        <div class="section">
                            <span>2</span>Prix unitaire
                        </div>
                        <div class="inner-wrap">
                            <label>
                                Prix unitaire <input value={DevisMatForm.prix} onChange={(e) => handleChange(e)} type="number" autoComplete="on" name="prix" />
                            </label>
                        </div>

                        <div class="section">
                            <span>3</span>Unité
                        </div>
                        <div class="inner-wrap">
                            <label>
                                Unité
                                <input value={DevisMatForm.unit} onChange={(e) => handleChange(e)} type="number" autoComplete="on" name="unit" />
                            </label>
                        </div>
                        <div class="button-section">
                            <input type="submit" name="Sign Up" />
                            <span class="privacy-policy">
                                <input type="checkbox" name="field7" />
                                You agree to our Terms and Policy.
                            </span>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};
