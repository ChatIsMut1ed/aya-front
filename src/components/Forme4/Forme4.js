import React from "react";
import "./Form4.css";
import { useState } from "react";
import { Link, useHistory } from "react-router-dom";

import { useDevisObj } from "../../Hooks/api/devisObj.api";
import { useAuthDispatch } from "../../stores/auth.store.js";

export const Forme4 = () => {
    // work
    const authDispatch = useAuthDispatch();
    const history = useHistory();

    const [DevisObjForm, setDevisObjForm] = useState({
        lib: "",
        qts: "",
        prix: "",
        superficie: "",
        qts_par_h: "",
    });

    const [DevisObjFormErrors, setDevisObjFormErrors] = useState({});

    const DevisObjMutation = useDevisObj();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const result = await DevisObjMutation.mutateAsync(DevisObjForm);
            if (result.data.Forage_status === "successful") {
                history.push({
                    pathname: "/DemandeExpertiseForage",
                    // state: { username: result.data.user.username },
                });
            }
        } catch (error) {
            setDevisObjFormErrors(error?.response?.data);
        }
    };

    const handleChange = (e) => {
        setDevisObjForm({ ...DevisObjForm, [e.target.name]: e.target.value });
    };

    return (
        <>
            <div className="gla">
                <div class="form-style-10">
                    <h1>
                        Veuillez remplir les renseignements!<span>de votre demande de devis des objets</span>
                    </h1>
                    <form onSubmit={handleSubmit}>
                        <div class="section">
                            <span>1</span>Quantité & Désignation
                        </div>
                        {DevisObjFormErrors?.message && <p style={{ color: "red" }}>{DevisObjFormErrors?.message}</p>}
                        <div class="inner-wrap">
                            <label>
                                Désignation
                                <input value={DevisObjForm.lib} onChange={(e) => handleChange(e)} type="text" autoComplete="on" name="lib" />
                            </label>
                            <label>
                                Quantité
                                <input value={DevisObjForm.qts} onChange={(e) => handleChange(e)} type="number" autoComplete="on" name="qts" />
                            </label>
                        </div>

                        <div class="section">
                            <span>2</span>Prix unitaire
                        </div>
                        <div class="inner-wrap">
                            <label>
                                Prix unitaire <input value={DevisObjForm.prix} onChange={(e) => handleChange(e)} type="number" autoComplete="on" name="prix" />
                            </label>
                        </div>

                        <div class="section">
                            <span>3</span>Superficie & Quantités/Heure
                        </div>
                        <div class="inner-wrap">
                            <label>
                                Superficie <input value={DevisObjForm.superficie} onChange={(e) => handleChange(e)} type="number" autoComplete="on" name="superficie" />
                            </label>
                            <label>
                                Qts/H <input value={DevisObjForm.qts_par_h} onChange={(e) => handleChange(e)} type="number" autoComplete="on" name="qts_par_h" />
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
