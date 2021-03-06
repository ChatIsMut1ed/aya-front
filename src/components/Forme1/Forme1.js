import React from "react";
import "./Forme.css";
import { useState } from "react";
import { Calendar } from "primereact/calendar";
import { Link, useHistory } from "react-router-dom";

import { useCreateSol } from "../../Hooks/api/sol.api";
import { useAuthDispatch } from "../../stores/auth.store.js";
import { ProgressSpinner } from "primereact/progressspinner";

export const Forme1 = () => {
    // work
    const authDispatch = useAuthDispatch();
    const history = useHistory();

    const [date1, setDate1] = useState(null);
    const [SolForm, setSolForm] = useState({
        id: null,
        nom_postulant: "",
        cin: "",
        adresse: "",
        tel: "",
        num_frais_im: "",
        local: "",
        endroit: "",
        decanat: "",
        delegation: "",
        superficie: "",
        ut_act_sol: "",
        sign_date: "",
        date: date1,
    });

    const [SolFormErrors, setSolFormErrors] = useState({});

    const SolUserMutation = useCreateSol();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const result = await SolUserMutation.mutateAsync(SolForm);
            if (result.data.Sol_status === "successful") {
                history.push({
                    pathname: "/DemandeExpertiseSol",
                    // state: { username: result.data.user.username },
                });
            }
        } catch (error) {
            setSolFormErrors(error?.response?.data);
        }
    };

    const handleChange = (e) => {
        setSolForm({ ...SolForm, [e.target.name]: e.target.value });
    };

    return (
        <>
            <div className="e">
                <meta charset="UTF-8" />
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

                <div class="container-contact100">
                    <div class="wrap-contact100">
                        <div className="titl1">
                            <h3>
                                {" "}
                                ?????????????????? ????????????????<br></br>
                                &nbsp; ?????????? ??????????????
                            </h3>{" "}
                        </div>
                        <div className="titl11">
                            <h3>???????????? ???????????? ???????????????? ?????????????? ?????????????????? ?????????????? ?????????????? ????????????????</h3>{" "}
                        </div>
                        <div className="do">
                            <h3>????????????</h3>
                        </div>
                        <div className="er">
                            {" "}
                            <h2>?????? ?????????? ?????????????? ???????????? ?????????????? ???????????????? ???????????? </h2>
                        </div>

                        <form class="contact100-form validate-form" onSubmit={handleSubmit}>
                            <span class="contact100-form-title">?????? ?????????? ???? ???????????? ????????</span>
                            <div className="righ">
                                <input value={SolForm.nom_postulant} onChange={(e) => handleChange(e)} type="text" autoComplete="on" name="nom_postulant" className="field" placeholder="?????????????? ??????????????" required />
                                <input value={SolForm.cin} onChange={(e) => handleChange(e)} type="text" autoComplete="on" name="cin" className="field" placeholder="?????? ?????????? ?????????????? ??????????????" required />
                                <input value={SolForm.date} onChange={(e) => handleChange(e)} type="text" autoComplete="on" name="date" className="field" placeholder="?????????????? ?????????? ???????????? " required />
                                <input value={SolForm.adresse} onChange={(e) => handleChange(e)} type="text" autoComplete="on" name="adresse" className="field" placeholder="??????????????" required />
                                <input value={SolForm.tel} onChange={(e) => handleChange(e)} type="text" autoComplete="on" name="tel" className="field" placeholder="????????????" required />
                                <div className="roa"> ?????????? ???? ??????????????</div>
                                <select value={SolForm.local} onChange={(e) => handleChange(e)} type="text" autoComplete="on" name="local" className="field" required>
                                    <option>?????????????????? ?????????? ???????????? </option>
                                    <option>?????????? ???????????? ???????????? </option>
                                    <option>????????</option>
                                </select>
                                <input value={SolForm.other} onChange={(e) => handleChange(e)} type="text" autoComplete="on" name="other" className="field" placeholder="????????" required />
                                <div className="sos">
                                    ?????????????? ?????????? ??????????&nbsp;
                                    <br></br> ?????????? ????????????????
                                </div>
                                <input value={SolForm.num_frais_im} onChange={(e) => handleChange(e)} type="text" autoComplete="on" name="num_frais_im" className="field" placeholder="?????? ?????????? ??????????????" required />
                                <input value={SolForm.place} onChange={(e) => handleChange(e)} type="text" autoComplete="on" name="place" className="field" placeholder=" ????????????( ?????????? ???????? ??????????)" required />
                                <div class="contenu1">
                                    <div class="rouge">
                                        <input value={SolForm.endroit} onChange={(e) => handleChange(e)} type="text" autoComplete="on" name="endroit" className="field" placeholder="??????????????" required />
                                    </div>
                                    <div class="vert">
                                        <input value={SolForm.decanat} onChange={(e) => handleChange(e)} type="text" autoComplete="on" name="decanat" className="field" placeholder="??????????????" required />
                                    </div>
                                    <div class="bleu">
                                        <input value={SolForm.delegation} onChange={(e) => handleChange(e)} type="text" autoComplete="on" name="delegation" className="field" placeholder="??????????????????" required />
                                    </div>
                                </div>
                                <input value={SolForm.superficie} onChange={(e) => handleChange(e)} type="text" autoComplete="on" name="superficie" className="field" placeholder="??????????????(????)" required />
                                <div className="r">
                                    ???????? ??????????????????<br></br>
                                </div>
                                <div className="ti">
                                    {" "}
                                    ???????? &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp;???????????? &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp;?????? ????????????&nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;
                                    &nbsp;???????? ????{" "}
                                </div>
                                <input value={SolForm.ut_act_sol} onChange={(e) => handleChange(e)} type="text" autoComplete="on" name="ut_act_sol" className="field" placeholder="?????????????????? ???????????? ??????????" required />
                            </div>
                            <div className="last">?????????? ???? </div>
                            <Calendar id="basic" value={SolForm.sign_date} onChange={(e) => handleChange(e)} type="text" autoComplete="on" name="sign_date" />

                            <div class="container-contact100-form-btn">
                                {SolFormErrors?.message && <p style={{ color: "red" }}>{SolFormErrors?.message}</p>}
                                {SolUserMutation.isLoading ? (
                                    <ProgressSpinner />
                                ) : (
                                    <button class="contact100-form-btn" type="submit">
                                        <span>
                                            Submit
                                            <i class="fa fa-long-arrow-right m-l-7" aria-hidden="true"></i>
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
