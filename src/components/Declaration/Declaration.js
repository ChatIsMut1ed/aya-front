import React from "react";
import "./Form2.css";
import { useState } from "react";
import { Calendar } from "primereact/calendar";
import { Link, useHistory } from "react-router-dom";

import { useCreateDecla, useDeclaByCin } from "../../Hooks/api/declaration.api";
import { useClient } from "../../Hooks/api/auth.api";

import { useAuthDispatch } from "../../stores/auth.store.js";
import { ProgressSpinner } from "primereact/progressspinner";
import { Dropdown } from "primereact/dropdown";
export const Declaration = () => {
    // const [date1, setDate1] = useState(null);
    // work
    const authDispatch = useAuthDispatch();
    const clientsQuery = useClient();
    const clientQuery = useDeclaByCin();
    const history = useHistory();
    const [selectedCity1, setSelectedCity1] = useState(null);

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
        space_t: "",
        space_t: "",
        space_t: "",
        space_t: "",
    });

    const [ForageFormErrors, setForageFormErrors] = useState({});

    const DeclaMutation = useCreateDecla();
    const onCityChange = async (e) => {
        setSelectedCity1(e.value);

        try {
            await clientQuery.mutateAsync(e.value.name);
            // history.push({
            //     pathname: "/Declaration",
            // });
            setForageForm(clientQuery.data);
        } catch (error) {
            console.log(error);
        }
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const result = await DeclaMutation.mutateAsync(ForageForm);
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
                                    <Dropdown value={selectedCity1} options={clientsQuery.isSuccess ? clientsQuery.data : []} onChange={onCityChange} optionLabel="name" placeholder="عدد بطاقة التعريف الوطنية" />
                                    {/* <input value={ForageForm.cin} onChange={(e) => handleChange(e)} type="text" className="field" autoComplete="on" name="cin" placeholder="عدد بطاقة التعريف الوطنية" /> */}
                                    <input value={ForageForm.nom_postulant} onChange={(e) => handleChange(e)} type="text" className="field" autoComplete="on" name="nom_postulant" placeholder="الإسم و اللقب " />
                                    <input value={ForageForm.todaysdate} onChange={(e) => handleChange(e)} type="text" className="field" autoComplete="on" name="todaysdate" placeholder="المؤرخة بتونس بتاريخ " />
                                    <input value={ForageForm.adresse} onChange={(e) => handleChange(e)} type="text" className="field" autoComplete="on" name="adresse" placeholder="العنوان" />
                                    <input value={ForageForm.tel} onChange={(e) => handleChange(e)} type="text" className="field" autoComplete="on" name="tel" placeholder="الهاتف" />
                                    <input value={ForageForm.tel} onChange={(e) => handleChange(e)} type="text" className="field" autoComplete="on" name="tel" placeholder="الهاتف" />
                                    <input value={ForageForm.tel} onChange={(e) => handleChange(e)} type="text" className="field" autoComplete="on" name="tel" placeholder="الهاتف" />{" "}
                                    <input value={ForageForm.nom_postulant} onChange={(e) => handleChange(e)} type="text" className="field" autoComplete="on" name="nom_postulant" placeholder="الإسم و اللقب " />
                                    <input value={ForageForm.cin} onChange={(e) => handleChange(e)} type="text" className="field" autoComplete="on" name="cin" placeholder="عدد بطاقة التعريف الوطنية" />
                                    <input value={ForageForm.todaysdate} onChange={(e) => handleChange(e)} type="text" className="field" autoComplete="on" name="todaysdate" placeholder="المؤرخة بتونس بتاريخ " />
                                    <input value={ForageForm.adresse} onChange={(e) => handleChange(e)} type="text" className="field" autoComplete="on" name="adresse" placeholder="العنوان" />
                                    <input value={ForageForm.tel} onChange={(e) => handleChange(e)} type="text" className="field" autoComplete="on" name="tel" placeholder="الهاتف" />
                                    <input value={ForageForm.tel} onChange={(e) => handleChange(e)} type="text" className="field" autoComplete="on" name="tel" placeholder="الهاتف" />
                                    <input value={ForageForm.tel} onChange={(e) => handleChange(e)} type="text" className="field" autoComplete="on" name="tel" placeholder="الهاتف" />
                                    <input value={ForageForm.tel} onChange={(e) => handleChange(e)} type="text" className="field" autoComplete="on" name="tel" placeholder="الهاتف" />
                                    <input value={ForageForm.tel} onChange={(e) => handleChange(e)} type="text" className="field" autoComplete="on" name="tel" placeholder="الهاتف" />
                                    <input value={ForageForm.tel} onChange={(e) => handleChange(e)} type="text" className="field" autoComplete="on" name="tel" placeholder="الهاتف" />
                                </div>

                                <br></br>
                                <br></br>
                                <div className="non">
                                    <div className="contenu1">
                                        <div className="vert">
                                            <input value={ForageForm.gouvernorat} onChange={(e) => handleChange(e)} type="text" className="field" autoComplete="on" name="gouvernorat" placeholder="العمادة" />
                                        </div>
                                        <div className="bleu">
                                            <input value={ForageForm.decanat} onChange={(e) => handleChange(e)} type="text" className="field" autoComplete="on" name="decanat" placeholder="المعتمدية" />
                                        </div>
                                    </div>
                                    <input value={ForageForm.superficie} onChange={(e) => handleChange(e)} type="text" className="field" autoComplete="on" name="superficie" placeholder="المساحة" />
                                    <input value={ForageForm.type_projet} onChange={(e) => handleChange(e)} type="text" className="field" autoComplete="on" name="type_projet" placeholder="موقع الارض " />
                                    <input value={ForageForm.space_t} onChange={(e) => handleChange(e)} type="text" className="field" autoComplete="on" name="space_t" placeholder=" الغراسات الموجودة" />
                                    <input value={ForageForm.type_plante} onChange={(e) => handleChange(e)} type="text" className="field" autoComplete="on" name="type_plante" placeholder="نوع المشروع " />
                                </div>
                                <br></br>
                                <br></br>
                                <div className="eo">
                                    <input value={ForageForm.remarque} onChange={(e) => handleChange(e)} type="text" className="field" autoComplete="on" name="remarque" placeholder="ملاحظات " />
                                </div>
                            </div>
                            <div className="last">صفاقس في </div>
                            <Calendar id="basic" value={ForageForm.date_signature} onChange={(e) => handleChange(e)} type="text" className="field" autoComplete="on" name="date_signature" />

                            <div className="container-contact100-form-btn">
                                {ForageFormErrors?.message && <p style={{ color: "red" }}>{ForageFormErrors?.message}</p>}
                                {DeclaMutation.isLoading ? (
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
