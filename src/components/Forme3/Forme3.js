import React from "react";
import "./Form3.css";
import { useState } from "react";
import { Link, useHistory } from "react-router-dom";

import { useFacture } from "../../Hooks/api/facture.api";
import { useAuthDispatch } from "../../stores/auth.store.js";

export const Forme3 = () => {
    // work
    const authDispatch = useAuthDispatch();
    const history = useHistory();

    const [FactureForm, setFactureForm] = useState({
        lib: "",
        qts: "",
        prix: "",
        tva: "",
        timbre: "",
    });

    const [FactureFormErrors, setFactureFormErrors] = useState({});

    const FactureMutation = useFacture();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const result = await FactureMutation.mutateAsync(FactureForm);
            if (result.data.Forage_status === "successful") {
                history.push({
                    pathname: "/DemandeExpertiseForage",
                    // state: { username: result.data.user.username },
                });
            }
        } catch (error) {
            setFactureFormErrors(error?.response?.data);
        }
    };

    const handleChange = (e) => {
        setFactureForm({ ...FactureForm, [e.target.name]: e.target.value });
    };

    return (
        <>
            <div className="gla">
                <div class="form-style-10">
                    <h1>
                        Veuillez remplir les renseignements!<span>de votre demande de facture</span>
                    </h1>
                    <form onSubmit={handleSubmit}>
                        <div class="section">
                            <span>1</span>Quantité & libellé
                        </div>
                        {FactureFormErrors?.message && <p style={{ color: "red" }}>{FactureFormErrors?.message}</p>}
                        <div class="inner-wrap">
                            <label>
                                libellé
                                <input value={FactureForm.lib} onChange={(e) => handleChange(e)} type="text" autoComplete="on" name="lib" />
                            </label>
                            <label>
                                Quantité
                                <input value={FactureForm.qts} onChange={(e) => handleChange(e)} type="number" autoComplete="on" name="qts" />
                            </label>
                        </div>

                        <div class="section">
                            <span>2</span>Prix unitaire
                        </div>
                        <div class="inner-wrap">
                            <label>
                                Prix unitaire <input value={FactureForm.prix} onChange={(e) => handleChange(e)} type="number" autoComplete="on" name="prix" />
                            </label>
                        </div>

                        <div class="section">
                            <span>3</span>TVA & Timbre
                        </div>
                        <div class="inner-wrap">
                            <label>
                                TVA <input value={FactureForm.tva} onChange={(e) => handleChange(e)} type="number" autoComplete="on" name="tva" />
                            </label>
                            <label>
                                Timbre <input value={FactureForm.timbre} onChange={(e) => handleChange(e)} type="number" autoComplete="on" name="timbre" />
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
