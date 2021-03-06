import React from "react";
import "./Form2.css";
import { useState } from "react";
import { Calendar } from "primereact/calendar";
import { Link, useHistory } from "react-router-dom";

import { useCreateForage } from "../../Hooks/api/forage.api";
import { useAuthDispatch } from "../../stores/auth.store.js";
import { ProgressSpinner } from "primereact/progressspinner";

export const Forme2 = () => {
    // const [date1, setDate1] = useState(null);
    // work
    const authDispatch = useAuthDispatch();
    const history = useHistory();

    const [ForageForm, setForageForm] = useState({
        id: null,
        nom_postulant: "",
        prenom: "aicha",
        cin: "",
        adresse: "",
        tel: "",
        gouvernorat: "",
        decanat: "",
        superficie: "",
        type_projet: "",
        remarque: "",
        type_plante: "",
        date_signature: "",
        space_t: "",
    });

    const [ForageFormErrors, setForageFormErrors] = useState({});

    const ForageUserMutation = useCreateForage();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const result = await ForageUserMutation.mutateAsync(ForageForm);
            if (result.data.Forage_status === "successful") {
                history.push({
                    pathname: "/Form2",
                    // state: { username: result.data.user.username },
                });
            }
        } catch (error) {
            setForageFormErrors(error?.response?.data);
        }
    };

    const handleChange = (e) => {
        setForageForm({ ...ForageForm, [e.target.name]: e.target.value });
    };

    return (
        <>
            <div className="e">
                <meta charSet="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />

                <link rel="icon" type="image/png" href="images/icons/favicon.ico" />

                <link rel="stylesheet" type="text/css" href="vendor/bootstrap/css/bootstrap.min.css" />

                <link rel="stylesheet" type="text/css" href="fonts/font-awesome-4.7.0/css/font-awesome.min.css" />

                <link rel="stylesheet" type="text/css" href="fonts/iconic/css/material-design-iconic-font.min.css" />

                <link rel="stylesheet" type="text/css" href="vendor/animate/animate.css" />

                <link rel="stylesheet" type="text/css" href="vendor/css-hamburgers/hamburgers.min.css" />

                <link rel="stylesheet" type="text/css" href="vendor/animsition/css/animsition.min.css" />

                <link rel="stylesheet" type="text/css" href="vendor/select2/select2.min.css" />

                <link rel="stylesheet" type="text/css" href="vendor/daterangepicker/daterangepicker.css" />

                <link rel="stylesheet" type="text/css" href="vendor/noui/nouislider.min.css" />

                <link rel="stylesheet" type="text/css" href="css/util.css" />
                <link rel="stylesheet" type="text/css" href="css/main.css" />

                <meta name="robots" content="noindex, follow" />

                <div className="container-contact100">
                    <div className="wrap-contact100">
                        <div className="yo">
                            <div className="img">
                                <img alt="" src="/img/agro/entr.jpg" />
                            </div>
                            <div className="titl3">
                                <h3>
                                    {" "}
                                    ?????????????????? ????????????????<br></br>
                                    &nbsp; ?????????? ??????????????
                                    <br></br> ?????????? ???????????? ???????????????????????? ????????????????
                                </h3>{" "}
                            </div>
                        </div>

                        <form className="contact100-form validate-form" onSubmit={handleSubmit}>
                            <span className="contact100-form-title">???????? ?????? ???????????? ?????????????? ?????????????? </span>
                            <div className="righ">
                                <div className="zo">
                                    <input value={ForageForm.nom_postulant} onChange={(e) => handleChange(e)} type="text" className="field" autoComplete="on" name="nom_postulant" placeholder="?????????? ?? ?????????? " />
                                    <input value={ForageForm.cin} onChange={(e) => handleChange(e)} type="text" className="field" autoComplete="on" name="cin" placeholder="?????? ?????????? ?????????????? ??????????????" />
                                    <input value={ForageForm.todaysdate} onChange={(e) => handleChange(e)} type="text" className="field" autoComplete="on" name="todaysdate" placeholder="?????????????? ?????????? ???????????? " />
                                    <input value={ForageForm.adresse} onChange={(e) => handleChange(e)} type="text" className="field" autoComplete="on" name="adresse" placeholder="??????????????" />
                                    <input value={ForageForm.tel} onChange={(e) => handleChange(e)} type="text" className="field" autoComplete="on" name="tel" placeholder="????????????" />
                                </div>

                                <br></br>
                                <br></br>
                                <div className="non">
                                    <div className="contenu1">
                                        <div className="vert">
                                            <input value={ForageForm.gouvernorat} onChange={(e) => handleChange(e)} type="text" className="field" autoComplete="on" name="gouvernorat" placeholder="??????????????" />
                                        </div>
                                        <div className="bleu">
                                            <input value={ForageForm.decanat} onChange={(e) => handleChange(e)} type="text" className="field" autoComplete="on" name="decanat" placeholder="??????????????????" />
                                        </div>
                                    </div>
                                    <input value={ForageForm.superficie} onChange={(e) => handleChange(e)} type="text" className="field" autoComplete="on" name="superficie" placeholder="??????????????" />
                                    <input value={ForageForm.type_projet} onChange={(e) => handleChange(e)} type="text" className="field" autoComplete="on" name="type_projet" placeholder="???????? ?????????? " />
                                    <input value={ForageForm.space_t} onChange={(e) => handleChange(e)} type="text" className="field" autoComplete="on" name="space_t" placeholder=" ???????????????? ????????????????" />
                                    <input value={ForageForm.type_plante} onChange={(e) => handleChange(e)} type="text" className="field" autoComplete="on" name="type_plante" placeholder="?????? ?????????????? " />
                                </div>
                                <br></br>
                                <br></br>
                                <div className="eo">
                                    <input value={ForageForm.remarque} onChange={(e) => handleChange(e)} type="text" className="field" autoComplete="on" name="remarque" placeholder="?????????????? " />
                                </div>
                            </div>
                            <div className="last">?????????? ???? </div>
                            <Calendar id="basic" value={ForageForm.date_signature} onChange={(e) => handleChange(e)} type="text" className="field" autoComplete="on" name="date_signature" />

                            <div className="container-contact100-form-btn">
                                {ForageFormErrors?.message && <p style={{ color: "red" }}>{ForageFormErrors?.message}</p>}
                                {ForageUserMutation.isLoading ? (
                                    <ProgressSpinner />
                                ) : (
                                    <button className="contact100-form-btn" type="submit">
                                        <span>
                                            Submit
                                            <i className="fa fa-long-arrow-right m-l-7" aria-hidden="true"></i>
                                        </span>
                                    </button>
                                )}
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};
