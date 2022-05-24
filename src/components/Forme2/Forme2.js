import React from "react";
import "./Form2.css";
import { useState } from "react";
import { Calendar } from "primereact/calendar";
import { Link, useHistory } from "react-router-dom";

import { useForage } from "../../Hooks/api/forage.api";
import { useAuthDispatch } from "../../stores/auth.store.js";

export const Forme2 = () => {
    // const [date1, setDate1] = useState(null);
    // work
    const authDispatch = useAuthDispatch();
    const history = useHistory();

    const [ForageForm, setForageForm] = useState({
        name: "",
        cin: "",
        todaysdate: "",
        adress: "",
        phone: "",
        region: "",
        deanship_place: "",
        space: "",
        space_adress: "",
        occupied_space: "",
        project_type: "",
        notes: "",
        sign_date: "",
    });

    const [ForageFormErrors, setForageFormErrors] = useState({});

    const ForageUserMutation = useForage();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const result = await ForageUserMutation.mutateAsync(ForageForm);
            if (result.data.Forage_status === "successful") {
                history.push({
                    pathname: "/DemandeExpertiseForage",
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
                                    الجمهورية التونسية<br></br>
                                    &nbsp; وزارة الفلاحة
                                    <br></br> وكالة النهوض بالاستثمارات الفلاحية
                                </h3>{" "}
                            </div>
                        </div>

                        <form className="contact100-form validate-form" onSubmit={handleSubmit}>
                            <span className="contact100-form-title">مطلب حول معطيات المائدة السطحية </span>
                            <div className="righ">
                                <div className="zo">
                                    {ForageFormErrors?.message && <p style={{ color: "red" }}>{ForageFormErrors?.message}</p>}
                                    <input value={ForageForm.name} onChange={(e) => handleChange(e)} type="text" className="field" autoComplete="on" name="name" placeholder="الإسم و اللقب " />
                                    <input value={ForageForm.cin} onChange={(e) => handleChange(e)} type="text" className="field" autoComplete="on" name="cin" placeholder="عدد بطاقة التعريف الوطنية" />
                                    <input value={ForageForm.todaysdate} onChange={(e) => handleChange(e)} type="text" className="field" autoComplete="on" name="todaysdate" placeholder="المؤرخة بتونس بتاريخ " />
                                    <input value={ForageForm.adress} onChange={(e) => handleChange(e)} type="text" className="field" autoComplete="on" name="adress" placeholder="العنوان" />
                                    <input value={ForageForm.phone} onChange={(e) => handleChange(e)} type="text" className="field" autoComplete="on" name="phone" placeholder="الهاتف" />
                                </div>

                                <br></br>
                                <br></br>
                                <div className="non">
                                    <div className="contenu1">
                                        <div className="vert">
                                            <input value={ForageForm.region} onChange={(e) => handleChange(e)} type="text" className="field" autoComplete="on" name="region" placeholder="العمادة" />
                                        </div>
                                        <div className="bleu">
                                            <input value={ForageForm.deanship_place} onChange={(e) => handleChange(e)} type="text" className="field" autoComplete="on" name="deanship_place" placeholder="المعتمدية" />
                                        </div>
                                    </div>
                                    <input value={ForageForm.space} onChange={(e) => handleChange(e)} type="text" className="field" autoComplete="on" name="space" placeholder="المساحة" />
                                    <input value={ForageForm.space_adress} onChange={(e) => handleChange(e)} type="text" className="field" autoComplete="on" name="space_adress" placeholder="موقع الارض " />
                                    <input value={ForageForm.occupied_space} onChange={(e) => handleChange(e)} type="text" className="field" autoComplete="on" name="occupied_space" placeholder=" الغراسات الموجودة" />
                                    <input value={ForageForm.project_type} onChange={(e) => handleChange(e)} type="text" className="field" autoComplete="on" name="project_type" placeholder="نوع المشروع " />
                                </div>
                                <br></br>
                                <br></br>
                                <div className="eo">
                                    <input value={ForageForm.notes} onChange={(e) => handleChange(e)} type="text" className="field" autoComplete="on" name="notes" placeholder="ملاحظات " />
                                </div>
                            </div>
                            <div className="last">صفاقس في </div>
                            <Calendar id="basic" value={ForageForm.sign_date} onChange={(e) => handleChange(e)} type="text" className="field" autoComplete="on" name="sign_date" />

                            <div className="container-contact100-form-btn">
                                <button className="contact100-form-btn" type="submit">
                                    <span>
                                        Submit
                                        <i className="fa fa-long-arrow-right m-l-7" aria-hidden="true"></i>
                                    </span>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};
